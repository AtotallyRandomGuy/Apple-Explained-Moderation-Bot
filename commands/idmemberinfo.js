module.exports = {
  name: 'idmemberinfo',
  aliases: ['memberinfoid'],
  description: 'Gets info about ID number mentioned',
  usage: '<id>',
  cooldown: 0,
  mod:true,
	execute(message, args) {
    const Discord = require('discord.js');
    
    const fs = require('fs');
    try{
    fs.readFile('./logs/'+args+'-modwarnings.log', (err, data) => {
      if (err) {
        console.error(err)
        const memberinfoembed = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setTitle('Member Information')
        .addFields(
          { name: 'Punishment Log', value: 'No punishment information found.', inline: false },
          { name: 'Other information', value: 'Member ID: '+ args , inline: false },
        )
        .setTimestamp()
        message.channel.send(memberinfoembed)

        return
      }
      const memberinfoembed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setTitle('Member Information')
      .addFields(
        { name: 'Punishment Log', value: data, inline: false },
        { name: 'Other information', value: 'Member ID: '+ args , inline: false },
      )
      .setTimestamp()
      message.channel.send(memberinfoembed)
    }) 
  }catch(error) {
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
}}