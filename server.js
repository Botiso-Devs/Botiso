const Discord = require("discord.js");
const bot =  new Diacord.Client();

bot.on("message", (message) => {
 if(message.content === ".help") {
   message.channel.send("Not Happening Yet Buf
   }
});

bot.login(process.env.BOT_TOKEN);
