module.exports = {
  name: 'memberinfo',
  aliases: ['infomember'],
  description: 'Gets info about mentioned user',
  usage: '<user>',
  cooldown: 0,
	execute(message, args) {
    if (message.member.roles.cache.some(role => role.name === 'Moderator')) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const fs = require('fs');
    try {const taggeduser = message.mentions.users.first().id
    const taggeduserobject = message.mentions.users.first()
    fs.readFile('./logs/'+taggeduser+'-modwarnings.log', (err, data) => {
      if (err) {
        console.error(err)
        const memberinfoembed = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setTitle('Member Information')
        .setAuthor(taggeduserobject.username)
        .addFields(
          { name: 'Punishment Log', value: 'No punishment information found.', inline: false },
          { name: 'Other information', value: 'Member ID: '+ taggeduserobject.id +'\nJoin date: '+ taggeduserobject.user.createdAt , inline: false },
        )
        .setTimestamp()
        message.channel.send(memberinfoembed)

        return
      }
      const memberinfoembed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setTitle('Member Information')
      .setAuthor(taggeduserobject.username)
      .addFields(
        { name: 'Punishment Log', value: data, inline: false },
        { name: 'Other information', value: 'Member ID: '+ taggeduserobject.id+'\nJoin date: '+ taggeduserobject.user.createdAt , inline: false },
      )
      .setTimestamp()
      message.channel.send(memberinfoembed)
    }) }catch(error) {
			// Your code broke (Leave untouched in most cases)
			const fs = require('fs');
			const Discord = require('discord.js');
			const { MessageEmbed } = require('discord.js')
			var today = new Date();
			var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			global.dateTime = date+' '+time;
			fs.appendFileSync('./debuglogs/'+sessionid+'-error.log','('+dateTime+')'+error+'\n\n');
			console.error('an error has occured', error);
		  }

  }else {
    message.reply(`you don't seem to have the correct permissions to use this command. Please try again later or contact the bot owner.`)
  }}}