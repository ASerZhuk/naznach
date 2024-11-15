import { NextResponse } from 'next/server'
import TelegramBot from 'node-telegram-bot-api'
import prisma from '@/app/libs/prismadb'
import { NextApiRequest, NextApiResponse } from 'next'

const bot = new TelegramBot('7655736393:AAGYAPPjBo1WWKhAXtcUMj0FsTWH35Y7D8g')

const botUsername = 'naznach_twa_bot'
const webAppUrl = 'https://naznach.vercel.app'

// Устанавливаем вебхук на этот маршрут
bot.setWebHook(`https://naznach.vercel.app/api/bot`)

// Основная логика обработки сообщений
export async function POST(req: Request) {
	try {
		const body = await req.json()
		const { message, callback_query } = body

		if (message) {
			const chatId = message.chat.id.toString()
			const text = message.text || ''
			const startPayload = text.split(' ')[1] || null

			// Проверяем, есть ли пользователь в базе данных
			let user = await prisma.user.findUnique({
				where: { telegramId: chatId },
			})

			if (startPayload) {
				// Если передан payload, ищем мастера
				let master = await prisma.specialist.findUnique({
					where: { userId: startPayload },
				})

				if (!user) {
					// Создаем нового пользователя
					user = await prisma.user.create({
						data: {
							telegramId: chatId,
							firstName: message.from?.first_name || '',
							lastName: message.from?.last_name || '',
							chatId: chatId.toString(),
							username: message.from?.username || '',
						},
					})
				}

				if (master) {
					// Отправляем кнопку для записи к мастеру
					const button = {
						reply_markup: {
							inline_keyboard: [
								[
									{
										text: 'Записаться к мастеру',
										web_app: {
											url: `${webAppUrl}/profile_zapis/${startPayload}`,
										},
									},
								],
							],
						},
					}

					await bot.sendMessage(
						chatId,
						`Записаться к мастеру <b>${master.firstName} ${master.lastName}</b>`,
						{
							reply_markup: button.reply_markup,
							parse_mode: 'HTML',
						}
					)
				} else {
					await bot.sendMessage(chatId, 'Мастер не найден.')
				}

				return
			}

			// Если пользователь существует, отправляем приветственное сообщение
			if (user) {
				const button = {
					reply_markup: {
						inline_keyboard: [
							[
								{
									text: 'Перейти в приложение',
									web_app: { url: `${webAppUrl}` },
								},
							],
						],
					},
				}

				await bot.sendMessage(chatId, 'Вы уже зарегистрированы.', button)
				return
			}

			// Если пользователь новый, создаём его
			user = await prisma.user.create({
				data: {
					telegramId: chatId,
					firstName: message.from?.first_name || '',
					lastName: message.from?.last_name || '',
					chatId: chatId.toString(),
					username: message.from?.username || '',
				},
			})

			// Приветственное сообщение с выбором типа профиля
			const options = {
				reply_markup: {
					inline_keyboard: [
						[
							{ text: 'Клиент', callback_data: 'client' },
							{ text: 'Специалист', callback_data: 'specialist' },
						],
					],
				},
			}

			const photoWelcome = `${webAppUrl}/11.png`

			await bot.sendPhoto(chatId, photoWelcome, {
				caption: `👋 Добро пожаловать! Пожалуйста, выберите тип профиля, чтобы продолжить:`,
				reply_markup: options.reply_markup,
			})
		}

		if (callback_query) {
			const chatId = callback_query.message?.chat.id.toString()
			const telegramId = callback_query.from.id.toString()

			if (!chatId) return

			const user = await prisma.user.findUnique({
				where: { telegramId: telegramId },
			})

			if (!user) {
				await bot.sendMessage(
					chatId,
					'Пользователь не найден. Пожалуйста, зарегистрируйтесь сначала.'
				)
				return
			}

			// Обработка выбора профиля "Клиент"
			if (callback_query.data === 'client') {
				const profileOptions = {
					reply_markup: {
						inline_keyboard: [
							[
								{
									text: 'Перейти в приложение',
									web_app: { url: `${webAppUrl}` },
								},
							],
						],
					},
				}
				const photoProfile = `${webAppUrl}/33.png`

				await bot.sendPhoto(chatId, photoProfile, {
					caption: 'Вы выбрали профиль клиента.',
					reply_markup: profileOptions.reply_markup,
				})
			}

			// Обработка выбора профиля "Специалист"
			if (callback_query.data === 'specialist') {
				try {
					await prisma.user.update({
						where: { telegramId: telegramId },
						data: { isMaster: true },
					})

					await prisma.specialist.create({
						data: {
							userId: user.telegramId,
							chatId: chatId.toString(),
							firstName: user.firstName,
							lastName: user.lastName,
							username: user.username,
							isMaster: true,
						},
					})

					const profileOptions = {
						reply_markup: {
							inline_keyboard: [
								[
									{
										text: 'Перейти в приложение',
										web_app: { url: `${webAppUrl}` },
									},
								],
							],
						},
					}

					const photoProfile = `${webAppUrl}/22.png`

					await bot.sendPhoto(chatId, photoProfile, {
						caption: `Вы специалист. Ваша ссылка: https://t.me/${botUsername}?start=${chatId}`,
						reply_markup: profileOptions.reply_markup,
					})
				} catch (error) {
					console.error('Ошибка при регистрации специалиста:', error)
					await bot.sendMessage(
						chatId,
						'Произошла ошибка при регистрации. Попробуйте еще раз.'
					)
				}
			}
		}

		return NextResponse.json({ success: true })
	} catch (error) {
		console.error('Произошла ошибка:', error)
		return NextResponse.json({ error }, { status: 500 })
	}
}
