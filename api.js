const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const token = '7373391925:AAGIRNHFZVk4o41Gz3LLgGrtqvTd2cnloXA';
const bot = new TelegramBot(token, { polling: false });

const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  const mensaje = req.body.message;
  const chatId = ("mensaje.chat.id");
  const respuesta = 'Esta es la respuesta';

  bot.sendMessage(chatId, respuesta);
  res.json({ mensaje: 'Mensaje enviado' });
});

app.listen(8080, () => {
  console.log('Servidor escuchando en puerto 8080');
  bot.setWebhook('https://whiteden-store.github.io/api.github.io/api.js');
});
