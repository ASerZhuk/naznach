import { NextResponse } from 'next/server'
import TelegramBot from 'node-telegram-bot-api'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const bot = new TelegramBot('YOUR_BOT_TOKEN', {
	polling: false,
})

const botUsername = 'naznach_twa_bot'
const webAppUrl = 'https://naznach.vercel.app'

// Устанавливаем вебхук на этот маршрут
bot.setWebHook(`https://naznach.vercel.app/api/bot`)

// Основная логика обработки сообщений
bot.on('message', async msg => {
	const chatId = msg.chat.id.toString()
	const text = msg.text || ''
	const startPayload = text.split(' ')[1]; // Извлекаем параметр после /start

	// Проверяем, является ли текст командой /start
	if (text.startsWith('/start')) {
		// Проверяем, есть ли пользователь в базе данных
		let user = await prisma.user.findUnique({
			where: { telegramId: chatId },
		})

		// Если параметр существует и пользователя нет, создаём пользователя и предлагаем записаться
		if (startPayload) {
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
	}
})

// Обработка нажатия на инлайн-кнопки выбора типа профиля
bot.on('callback_query', async callbackQuery => {
	const chatId = callbackQuery.message?.chat.id
	const telegramId = callbackQuery.from.id.toString()

	if (!chatId) return

	const user = await prisma.user.findUnique({
		where: { telegramId: telegramId },
			})

	if (!user) {
		bot.sendMessage(chatId, 'Сначала зарегистрируйтесь, используя команду /start.')
		return
	}

	if (callbackQuery.data === 'client') {
		// Логика для клиента
		await prisma.user.update({
			where: { telegramId: telegramId },
			data: { role: 'client' },
		})

		const photoClient = `${webAppUrl}/client.png`
		bot.sendPhoto(chatId, photoClient, {
			caption: 'Вы выбрали роль клиента. Теперь вы можете записаться на услуги.',
		})
	} else if (callbackQuery.data === 'specialist') {
		// Логика для специалиста
		await prisma.user.update({
			where: { telegramId: telegramId },
			data: { role: 'specialist' },
		})

		const photoSpecialist = `${webAppUrl}/specialist.png`
		bot.sendPhoto(chatId, photoSpecialist, {
			caption: 'Вы выбрали роль специалиста. Пожалуйста, заполните ваш профиль.',
		})
	}

	// Удаляем сообщение с кнопками после выбора
	bot.deleteMessage(chatId, callbackQuery.message.message_id.toString())
})

// Обработка POST-запросов для вебхука
export async function POST(req: Request) {
	// Получаем обновления из запроса вебхука
	const body = await req.json()
	bot.processUpdate(body)
	return NextResponse.json({ status: 'ok' })
}
