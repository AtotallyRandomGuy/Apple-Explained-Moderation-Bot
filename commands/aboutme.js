module.exports = {
  name: 'aboutme',
  aliases: [''],
	description: 'Gets info about you',
	execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    message.author.send('Here is what I have on you.')
    const fs = require('fs');
    message.author.send({
      files: ['./logs/' + message.author.id + '-warnings.log']
  });
  message.author.send({
    files: ['./logs/' + message.author.id + '-messages.log']
});
  }}