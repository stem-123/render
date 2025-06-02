const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
require('dotenv').config();

// Discord Bot の準備
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`✅ Bot ログイン: ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.channel.send('pong!');
  }
});

client.login(process.env.TOKEN);

// ✅ ダミー HTTP サーバー（Renderのポート監視対策）
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is running!');
});

app.listen(port, () => {
  console.log(`🌐 Web server is listening on port ${port}`);
});
