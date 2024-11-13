import { NextResponse } from 'next/server'
import TelegramBot from 'node-telegram-bot-api'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const bot = new TelegramBot('7655736393:AAGYAPPjBo1WWKhAXtcUMj0FsTWH35Y7D8g', {
	polling: false,
})

const botUsername = 'naznach_twa_bot'
const webAppUrl = 'https://naznach.vercel.app'

// Устанавливаем вебхук на этот маршрут
bot.setWebHook(`https://naznach.vercel.app/api/bot`)

// Основная логика обработки сообщений
bot.on('/start', msg => {
	const chatId = msg.chat.id
	bot.sendMessage(chatId, 'grfghfrhbfg')
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

export async function POST(req: Request) {
	// Получаем обновления из запроса вебхука
	const body = await req.json()
	bot.processUpdate(body)
	return NextResponse.json({ status: 'ok' })
}
