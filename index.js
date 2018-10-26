const Discord = require("discord.js");
const bot =  new Discord.Client();

bot.on("message", (message) => {
 if(message.content === ".help") {
   message.channel.send("Not Happening Yet Bud")
   }
});

bot.login(process.env.BOT_TOKEN);
