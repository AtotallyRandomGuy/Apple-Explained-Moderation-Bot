module.exports = {
  name: 'warn',
  aliases: ['punish'],
  description: 'Logs a warning.',
  usage: '<user> <reason>',
  cooldown: 0,
  mod:true,
  nodelay:true,
	execute(message, args, client) {
    //Prepares required
    const config = require('../config.json')
    userwarnings = require('../logs/userwarnings.json')
    var reason = args.join(' ').replace(args[0], '')
    const mentionedUser = message.mentions.members.first()
    try {
      //Permissions check
      if (message.author.id == message.mentions.members.first().id){
        respond('',`You can't perform this action on yourself.`, message.channel);
        return;
      }
			if (message.mentions.members.first().roles.cache.some(role => role.id === config.ModeratorRoleID)){
        respond('',`You can't perform that action on this user.`, message.channel);return;
      }

      //Writes reason to JSON

      if (!userwarnings[mentionedUser.id])
			  userwarnings[mentionedUser.id] = [];

		  userwarnings[mentionedUser.id].push(reason);

		fs.writeFile('./logs/userwarnings.json', JSON.stringify(userwarnings), (err) => {
			if (err) {
				console.log(err);
				respond('',`An error occured during saving.`, message.channel);
				return;
      }
    })
      
      //Notifies of the warn
      respond('⚠️','<@'+message.mentions.members.first() + '> had a warning logged. User has '+userwarnings[mentionedUser.id].length+' warnings.\nReason: '+reason, message.channel)
      const warnedperson = message.mentions.users.first()
      const user = client.users.cache.get(warnedperson);
      respond('⚠️','You have been warned due to: '+ reason+'\n\nThis is warning '+userwarnings[mentionedUser.id].length+'.', warnedperson)
      
      //Mod action event
      modaction(this.name, message.author.tag, message.channel.name, message.content)
    }catch(error) {
      respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
      errorlog(error)
      // Your code broke (Leave untouched in most cases)
      console.error('an error has occured', error);
      }
    
  }}
