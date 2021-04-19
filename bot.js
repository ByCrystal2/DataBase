const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('ODI5NzEwNDAzNjg0NDAxMTkz.YG8GBw.vj6J620_ez0kIUQSYLma8lgT5ao');