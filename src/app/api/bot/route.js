const { NextResponse } = require('next/server');
const { PrismaClient } = require('@prisma/client');
const TelegramBot = require('node-telegram-bot-api');

const prisma = new PrismaClient();
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN is not defined. Please set it in the environment variables.");
}

const bot = new TelegramBot(TOKEN);
const botUsername = 'naznach_twa_bot';
const webAppUrl = 'https://naznach.vercel.app';


// Функция для регистрации нового пользователя
async function registerUser(chatId, msg) {
    return await prisma.user.create({
        data: {
            telegramId: chatId,
            firstName: msg.from?.first_name || '',
            lastName: msg.from?.last_name || '',
            chatId: chatId.toString(),
            username: msg.from?.username || '',
        },
    });
}

// Функция для отправки приветственного сообщения
async function sendWelcomeMessage(chatId) {
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Клиент', callback_data: 'client' },
                    { text: 'Специалист', callback_data: 'specialist' },
                ],
            ],
        },
    };
    const photoWelcome = `${webAppUrl}/11.png`;
    await bot.sendPhoto(chatId, photoWelcome, {
        caption: `👋 Добро пожаловать! Мы рады видеть вас в нашем приложении для онлайн записи. Пожалуйста, выберите тип профиля, чтобы продолжить:`,
        reply_markup: options.reply_markup,
    });
}

// Обработка команды /start
bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id.toString();
    let user = await prisma.user.findUnique({
        where: { telegramId: chatId },
    });

    if (!user) {
        user = await registerUser(chatId, msg);
        await sendWelcomeMessage(chatId);
    } else {
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
        };
        await bot.sendMessage(chatId, 'Вы уже зарегистрированы.', button);
    }
});

// Основная логика обработки сообщений
bot.on('message', async (msg) => {
    const chatId = msg.chat.id.toString();
    const text = msg.text || '';
    const startPayload = text.split(' ')[1];

    // Пример обработки команды /start
 if (text==='/start'){
    const chatId = msg.chat.id
    bot.sendMessage(chatId, 'Привет! Я бот, и я работаю!');
};

    if (!msg.text.startsWith('/start')) {
        return; // Игнорируем сообщения, если они не начинаются с /start
    }

    // Здесь можно добавить логику обработки сообщений, если это необходимо
});

// Обработка нажатия на инлайн-кнопки выбора типа профиля
bot.on('callback_query', async (callbackQuery) => {
    const chatId = callbackQuery.message?.chat.id;
    const telegramId = callbackQuery.from.id.toString();

    if (!chatId) return;

    const user = await prisma.user.findUnique({
        where: { telegramId: telegramId },
    });

    if (!user) {
        await bot.sendMessage(chatId, 'Пользователь не найден. Пожалуйста, зарегистрируйтесь сначала.');
        return;
    }

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
        };
        const photoProfile = `${webAppUrl}/33.png`;
        await bot.sendPhoto(chatId, photoProfile, {
            caption: 'Вы выбрали профиль клиента.',
            reply_markup: profileOptions.reply_markup,
        });
    } else if (callbackQuery.data === 'specialist') {
        try {
            await prisma.user.update({
                where: { telegramId: telegramId },
                data: { isMaster: true },
            });

            await prisma.specialist.create({
                data: {
                    userId: user.telegramId,
                    chatId: chatId.toString(),
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    isMaster: true,
                },
            });

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
            };

            const photoProfile = `${webAppUrl}/22.png`;
            await bot.sendPhoto(chatId, photoProfile, {
                caption: `Вы специалист. Вот ваша уникальная ссылка для записи: https://t.me/${botUsername}?start=${chatId}`,
                reply_markup: profileOptions.reply_markup,
            });
        } catch (error) {
            console.error('Ошибка при регистрации специалиста:', error);
            await bot.sendMessage(chatId, 'Произошла ошибка при регистрации. Попробуйте еще раз.');
        }
    }
});

// Обработка POST-запроса для вебхука
async function POST(req) {
    const body = await req.json();
    bot.processUpdate(body);
    return NextResponse.json({ status: 'ok' });
}

module.exports = { POST };
