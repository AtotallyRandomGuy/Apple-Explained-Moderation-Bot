module.exports = {
    name: 'leaderboard',
    aliases: ['lb', 'gamelb', 'rank', 'gamerank'],
    description: '**This is a game command.**\nFeeling competitive? Check who\'s on top with this command!\n**Start by typing `.leaderboard init`!**\nWant to start over? Type `.leaderboard wipe`.',
    usage: '',
    cooldown: 0,
    hidden: true,
      execute(message, args, client) {
      const fs = require('fs');
      const Discord = require('discord.js')
      const msg = message
      const arg = message.content.slice('').trim().split(/ +/g); 
      try {
         if(arg[1] === 'init'){
            fs.readFile('./leaderboards/' + message.author.id + '_gamestats.json', err => {
                if(err) {
                    fs.writeFile('./leaderboards/' + message.author.id + '_gamestats.json', JSON.stringify({
                        "triviawins" : 0, 
                        "trivialosses" : 0,
                        "cryptwins" : 0, 
                        "cryptlosses" : 0,
                        "rdgwins" : 0, 
                        "rdglosses" : 0,
                        "slotswins" : 0, 
                        "slotslosses" : 0,
                        "slotsminorwins" : 0,
                        "roulettewins" : 0, 
                        "roulettelosses" : 0,
                        "rouletteminorwins" : 0
                    }), (err) => {if(err)console.log(err)});
                    console.log(message.author.tag + " is ready to compete.");
                    respond('🎮 Game Leaderboard', 'Your Leaderboard data has been initialized.\nGo compete with other members in the server!' , message.channel);
                    return;
                }else {
                    console.log(message.author.tag + " is already competing!");
                    respond('🎮 Game Leaderboard', 'You already have Leaderboard data!' , message.channel)
                    return
                }
            })
          }
          if(arg[1] === 'wipe'){
            console.log("If you see this message and nothing is under it, check code!")
            fs.readFile('./leaderboards/' + message.author.id + '_gamestats.json', err => {
                console.log(err)
                if(!err) {
                    fs.unlinkSync('./leaderboards/' + message.author.id + '_gamestats.json', err)
                    console.log(message.author.tag + " quit the leaderboards.")
                            respond('🎮 Game Leaderboard', 'Your Leaderboard stats have been successfully wiped.', message.channel);
                            return
                } else {
                    respond('🎮 Game Leaderboard', 'Your Leaderboard stats do not exist.\nType `leaderboard init` to start competing with other members in the server!', message.channel);
                    return
                }
             })
          } else if(arg[1] === 'info'){
            respond('🎮 About Game Leaderboard', 'Version: 1.0.1.145 build 004\nAuthor: Thomas Stefanos/[thomas swim]' , message.channel)
            return
          } else if(!arg[1]){
        fs.readFile('./leaderboards/' + message.author.id + '_gamestats.json', error => {
            if (!error) {
            const stats = require('../leaderboards/' + message.author.id + '_gamestats.json')
            const tWins = stats["triviawins"]
            const tLosses = stats["trivialosses"]
            const cWins = stats["cryptwins"]
            const cLosses = stats["cryptlosses"]
            const rWins = stats["rdgwins"]
            const rLosses = stats["rdglosses"]
            const sWins = stats["slotswins"]
            const sLosses = stats["slotslosses"]
            const smWins = stats["slotsminorwins"]
            const roWins = stats["roulettewins"]
            const roLosses = stats["roulettelosses"]
            const romWins = stats["rouletteminorwins"]
            const roAllWins = roWins + romWins
            const rWLrate = roAllWins/stats["rdglosses"]*100
              respond('🎮 Game Leaderboard', message.author.tag + ', here are your Leaderboard stats:\n__**-=Trivia=-**__\nCorrect answers: ' + tWins + "\nWrong answers: " + tLosses + '\n__**-=Cryptogram=-**__\nSuccessful digital heists: ' + cWins + "\nInfected computers: " + cLosses + '\n__**-=Roll Dice Game=-**__\nHigh rolls: ' + rWins + "\nLosing rolls: " + rLosses + '\n__**-=Slots=-**__\nJackpots hit: ' + sWins + "\nMinor prize rolls hit: " + smWins + "\nLosing rolls: " + sLosses + '\n__**-=Roulette=-**__\nWinning rolls: ' + roWins + "\nMinor winning rolls: " + romWins + "\nLosing rolls: " + roLosses, message.channel)
              return
            } else if(error) {
              respond('🎮 Game Leaderboard', 'Your Leaderboard stats do not exist.\nType `leaderboard init` to start competing with other members in the server!', message.channel);
              return;
            }
          });
        }
    }catch(error) {
      respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
      errorlog(error)
      // Your code broke (Leave untouched in most cases)
      console.error('an error has occured', error);
      }
    }
  }
