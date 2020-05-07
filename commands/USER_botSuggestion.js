module.exports = {
    name: 'suggest',
    aliases: ['botsuggestion'],
    description: 'Suggests a feature to add to the bot!',
    usage: '<request>',
      execute(message, args, client) {
      const fs = require('fs');
      const argarray = message.content.slice().trim().split(/ +/g);
      const {
        botSuggestionWebhookID,
        botSuggestionWebhookToken
      } = require('../config.json')
      const text = args.join(' ');
      try {
        if(!botSuggestionWebhookID){throw 'Missing config entry. `botSuggestionWebhookID`'}else{}
        if(!botSuggestionWebhookToken){throw 'Missing config entry. `botSuggestionWebhookToken`'}else{}
        const webhookClient = new Discord.WebhookClient(`${botSuggestionWebhookID}`, `${botSuggestionWebhookToken}`);
        const embed = new Discord.MessageEmbed()
        .setTitle('Suggestion Received')
        .setDescription(text)
        .setFooter(`${message.author.tag} (${message.author.id})`)
        .setTimestamp()
      
      webhookClient.send('', {
        username: 'Bot Suggestion Webhook',
        avatarURL: '',
        embeds: [embed],
      });
        respond('Suggestion sent! 📧','Your suggestion was sent to the bot developer.', message.channel)
  }catch(error) {
    respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
    errorlog(error)
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
    }}