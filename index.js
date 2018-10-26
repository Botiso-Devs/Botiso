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

bot.on("ready", async () => {
 console.log("Bot Online... Made By Botiso Dev Team")
 bot.user.setActivity("Coding Central", {type: "PLAYING"});
 });

bot.login(process.env.BOT_TOKEN);
