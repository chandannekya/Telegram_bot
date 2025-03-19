const TelegramBot = require('node-telegram-bot-api');

// Your Bot Token
const token = '7870576801:AAHbOyuKaY05IznW1NuVzBlG-UATJib0f1w';

// Create bot instance with polling
const bot = new TelegramBot(token, { polling: true });

console.log('Bot is running...');

// Start Command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! I am your auto-reply bot.');
});

// Auto-Reply to any message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') return;

  bot.sendMessage(chatId, `Auto-reply: You said - "${text}"`);
});