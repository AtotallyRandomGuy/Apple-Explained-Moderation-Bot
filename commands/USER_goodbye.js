module.exports = {
    name: 'goodbye',
    aliases: ['bye'],
    description: 'Says goodbye. What else would it do? :joy:',
    usage: 'N/A',
    cooldown: 0,
      execute(message, args, client) {
      const Discord = require('discord.js');
      const info = require('../info.json')
      const fs = require('fs');
      try {
        const reason = args.join(' ')
      if (message.guild.members.cache.some(user => user.id === info.OwnerID)) {
      respond('','Goodbye, <@'+ message.author.id+'>! :wave: I hope to see my owner again! 🙂\nRemember, say hi to Stephanie for me!',message.channel);
      }else if (message.member.roles.cache.some(role => role.id === info.ModeratorRoleID)) {
      respond('','Goodbye, <@'+ message.author.id+'>! :wave: I hope to see you moderators again! 🙂',message.channel);
      }else if (message.member.roles.cache.some(role => role.id === info.DeveloperRoleID)) {
      respond('','Goodbye, <@'+ message.author.id+'>! :wave: I hope to see you developers again! 🙂',message.channel);
      }else if (message.member.roles.cache.some(role => role.id === info.BotManagerRoleID)) {
      respond('','Goodbye <@'+ message.author.id+'>! :wave: I hope to see my manager again! 🙂',message.channel);
      }else{respond('','Goodbye, <@'+ message.author.id+'>! :wave: I hope to see you again!', message.channel);}
    }catch(error) {
      respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
      errorlog(error)
      // Your code broke (Leave untouched in most cases)
      console.error('an error has occured', error);
      }
    }}