const Discord = require("discord.js");
const bot =  new Discord.Client();

bot.on("message", (message) => {
 if(message.content === ".help") {
   message.channel.send("Not Happening Yet Bud!!!!!")
   }
});

bot.on("message", (message) => {
 if(message.content === ".uptime") {
  message.channel.send("Under Work")
  }
});

bot.login(process.env.BOT_TOKEN);
