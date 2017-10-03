 const Discord = require("discord.js");
 
 var bot = new Discord.Client();
 
 bot.on("ready", () => {
     console.log("Ready");
  });
  
  bot.on('guildMemberAdd',  (member) => {
   member.guild.channels.get("343037231734456322").sendMessage("Welcome to the discord! Hope you have fun " + member);
      });
      
      bot.login(process.env.BOT_TOKEN); 
