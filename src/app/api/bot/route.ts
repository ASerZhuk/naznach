import { NextResponse } from 'next/server'
import TelegramBot from 'node-telegram-bot-api'
import prisma from '@/app/libs/prismadb'

const bot = new TelegramBot('7655736393:AAGYAPPjBo1WWKhAXtcUMj0FsTWH35Y7D8g')

const botUsername = 'naznach_twa_bot'
const webAppUrl = 'https://naznach.vercel.app'

// Устанавливаем вебхук на этот маршрут
bot.setWebHook(`https://naznach.vercel.app/api/bot`)

// Основная логика обработки сообщений
export async function POST(req: Request) {
	bot.on('message', async msg => {
		const chatId = msg.chat.id.toString()
		const text = msg.text || ''
		const startPayload = text.split(' ')[1]

		// Проверяем, есть ли пользователь в базе данных
		let user = await prisma.user.findUnique({
			where: { telegramId: chatId },
		})

		// Если параметр существует и пользователя нет, создаём пользователя и предлагаем записаться
		if (text === startPayload) {
			let master = await prisma.specialist.findUnique({
				where: { userId: startPayload },
			})
			if (!user) {
				// Создание нового пользователя
				user = await prisma.user.create({
					data: {
						telegramId: chatId,
						firstName: msg.from?.first_name || '',
						lastName: msg.from?.last_name || '',
						chatId: chatId.toString(),
						username: msg.from?.username || '',
					},
				})

				//bot.sendMessage(chatId, 'Добро пожаловать! Вы зарегистрированы.')
			}

			// Отправляем кнопку для записи к мастеру
			const button = {
				reply_markup: {
					inline_keyboard: [
						[
							{
								text: `Записаться к мастеру`,
								web_app: { url: `${webAppUrl}/profile_zapis/${startPayload}` }, // Ссылка на профиль мастера
							},
						],
					],
				},
			}

			bot.sendMessage(
				chatId,
				`Записаться к мастеру <b>${master?.firstName} ${master?.lastName}</b>`,
				{
					reply_markup: button.reply_markup,
					parse_mode: 'HTML',
				}
			)
			return
		}

		// Если пользователь существует и команда /start без параметра, показываем сообщение о регистрации
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

			bot.sendMessage(chatId, 'Вы уже зарегистрированы.', button)
			return
		}

		// Если пользователя нет, создаём его и предлагаем выбрать тип профиля
		user = await prisma.user.create({
			data: {
				telegramId: chatId,
				firstName: msg.from?.first_name || '',
				lastName: msg.from?.last_name || '',
				chatId: chatId.toString(),
				username: msg.from?.username || '',
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

		bot.sendPhoto(chatId, photoWelcome, {
			caption: `👋 Добро пожаловать! Мы рады видеть вас в нашем приложении для онлайн записи. Пожалуйста, выберите тип профиля, чтобы продолжить:`,
			reply_markup: options.reply_markup,
		})
	})
}

// Обработка нажатия на инлайн-кнопки выбора типа профиля
bot.on('callback_query', async callbackQuery => {
	const chatId = callbackQuery.message?.chat.id
	const telegramId = callbackQuery.from.id.toString()

	if (!chatId) return

	const user = await prisma.user.findUnique({
		where: { telegramId: telegramId },
	})

	if (!user) {
		bot.sendMessage(
			chatId,
			'Пользователь не найден. Пожалуйста, зарегистрируйтесь сначала.'
		)
		return
	}

	// Обработка выбора профиля "Клиент"
	if (callbackQuery.data === 'client') {
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
		bot.sendPhoto(chatId, photoProfile, {
			caption: 'Вы выбрали профиль клиента.',
			reply_markup: profileOptions.reply_markup,
		})
	}

	// Обработка выбора профиля "Специалист"
	if (callbackQuery.data === 'specialist') {
		try {
			// Обновляем пользователя как специалиста
			await prisma.user.update({
				where: { telegramId: telegramId },
				data: {
					isMaster: true, // Обновляем статус isMaster
				},
			})

			// Создаем запись в таблице специалистов
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

			bot.sendPhoto(chatId, photoProfile, {
				caption: `Вы специалист. Вот ваша уникальная ссылка для записи: https://t.me/${botUsername}?start=${chatId} `,
				reply_markup: profileOptions.reply_markup,
			})
		} catch (error) {
			console.error('Ошибка при регистрации специалиста:', error)
			bot.sendMessage(
				chatId,
				'Произошла ошибка при регистрации. Попробуйте еще раз.'
			)
		}
	}
})
