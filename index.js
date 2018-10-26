const Discord = require("discord.js")
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Bot Online")

bot.user.setActivity("24/7 BABY", {type: "PLAYING"})
});



bot.login(process.env.BOT_TOKEN);
