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
					// Кнопка записи к мастеру
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

			// Если пользователь существует и команда /start без параметра
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

			// Если пользователь новый и команда /start без параметра
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
				caption: `👋 Добро пожаловать! Мы рады видеть вас в нашем приложении для онлайн записи. Пожалуйста, выберите тип профиля, чтобы продолжить:`,
				reply_markup: options.reply_markup,
			})
		}

		if (callback_query) {
			const chatId = callback_query.message.chat.id.toString()
			const userId = callback_query.from.id.toString()
			const username = callback_query.from.username || ''

			if (callback_query.data === 'client') {
				await bot.sendMessage(
					chatId,
					'Вы зарегистрированы как клиент. Перейдите в приложение для записи.',
					{
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
				)
			}

			if (callback_query.data === 'specialist') {
				let master = await prisma.specialist.findUnique({
					where: { userId },
				})

				if (!master) {
					await prisma.specialist.create({
						data: {
							userId,
							chatId,
							firstName: callback_query.from.first_name || '',
							lastName: callback_query.from.last_name || '',
							username,
							isMaster: true,
						},
					})

					await prisma.user.update({
						where: { telegramId: userId },
						data: { isMaster: true },
					})

					const profileUrl = `https://t.me/${botUsername}?start=${username}`

					await bot.sendMessage(
						chatId,
						`Вы успешно зарегистрированы как специалист! Ваша уникальная ссылка: ${profileUrl}`
					)

					const profileButton = [
						[
							{
								text: 'Перейти в профиль',
								web_app: { url: `${webAppUrl}/profile/${username}` },
							},
						],
					]

					await bot.sendMessage(
						chatId,
						'Вы можете перейти в свой профиль для редактирования информации.',
						{
							reply_markup: { inline_keyboard: profileButton },
						}
					)
				} else {
					await bot.sendMessage(
						chatId,
						'Вы уже зарегистрированы как специалист.'
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
