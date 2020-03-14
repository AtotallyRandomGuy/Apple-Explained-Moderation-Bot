module.exports = {
  name: 'textaboutme',
  aliases: [''],
  description: 'Gets info about you',
  usage: 'N/A',
	execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
    try {message.author.send('Here is what I have on you.')
    const fs = require('fs');
    fs.readFile('./logs/' + message.author.id + '-warnings.log', 'utf8', function(err, contents) {
      // code using file data
      message.author.send('-Warning Log-\n\n' + contents)
  });
  message.author.send('Message log isn\'t available in text form.')
}catch(error) {
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
  }}