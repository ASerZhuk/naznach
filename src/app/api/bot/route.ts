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
export async function POST(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { message, callback_query } = req.body

		if (message) {
			const chatId = message.chat.id.toString()
			const text = message.text
			const username = message.chat.username || ''
			const userId = message.from.id.toString()

			if (text.startsWith('/start')) {
				const startPayload = text.split(' ')[1] || null
				let user = await prisma.user.findUnique({
					where: { telegramId: userId },
				})

				if (!user) {
					// Создание нового пользователя
					user = await prisma.user.create({
						data: {
							telegramId: userId,
							firstName: message.chat.first_name || '',
							lastName: message.chat.last_name || '',
							username,
							chatId,
							isMaster: false,
						},
					})
				}

				if (startPayload) {
					const master = await prisma.specialist.findUnique({
						where: { userId: startPayload },
					})

					if (master) {
						const bookButton = [
							[
								{
									text: 'Записаться',
									web_app: {
										url: `${webAppUrl}/profile_zapis/${startPayload}`,
									},
								},
							],
						]

						await bot.sendMessage(
							chatId,
							`Добро пожаловать! Вы можете записаться к специалисту ${master.firstName} ${master.lastName}.`,
							{
								reply_markup: { inline_keyboard: bookButton },
							}
						)
					} else {
						await bot.sendMessage(chatId, 'Такого мастера не найдено.')
					}
				} else {
					if (user.isMaster) {
						const profileButton = [
							[
								{
									text: 'Перейти в профиль',
									web_app: {
										url: `${webAppUrl}/profile/${username}`,
									},
								},
							],
						]

						await bot.sendMessage(
							chatId,
							'Добро пожаловать обратно! Вы уже зарегистрированы как специалист.',
							{
								reply_markup: { inline_keyboard: profileButton },
							}
						)
					} else {
						const inlineKeyboard = [
							[
								{
									text: 'Зарегистрироваться как специалист',
									callback_data: 'register_master',
								},
							],
						]

						await bot.sendMessage(
							chatId,
							'🎉 Добро пожаловать! Зарегистрируйтесь как специалист или продолжите как пользователь.',
							{
								reply_markup: { inline_keyboard: inlineKeyboard },
							}
						)
					}
				}
			}
		}

		if (callback_query) {
			const chatId = callback_query.message.chat.id.toString()
			const userId = callback_query.from.id.toString()
			const username = callback_query.from.username || ''

			if (callback_query.data === 'register_master') {
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
								web_app: {
									url: `${webAppUrl}/profile/${username}`,
								},
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

		res.status(200).end()
	} catch (error) {
		console.error('Произошла ошибка:', error)
		res.status(500).json({ error: 'Произошла ошибка' })
	}
}
