const Discord = require("discord.js");
const bot =  new Discord.Client();

bot.on("message", (message) => {
 if(message.content === ".help") {
  let help = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Botiso Help Commands")
  .addField("General Commands", "[`test']", true)
  .setFooter(`Requested By ${message.author.username}`, `${message.author.avatarURL}`)
  .setTimestamp()
  
  message.channel.send(help)
  }
 });
 



bot.on("ready", async () => {
 console.log("Bot Online... Made By Botiso Dev Team")
 bot.user.setActivity("Coding Central", {type: "PLAYING"});
 });

bot.on("message", (message) => {
 if(message.content === ".uptime") {
  let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `*${hours} hours, ${minutes} minutes and ${seconds} seconds*`;
  
  let uptimee = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("Botiso™ Uptime Command")
  .addField(`󠂪 󠂪`, `**Uptime**: ${uptime}\n󠂪 󠂪`, true)
  .setFooter(`Requested By ${message.author.username}`, `${message.author.avatarURL}`)
  .setTimestamp()
 
  message.channel.send(uptimee)
   }
 });
 
bot.login(process.env.BOT_TOKEN);
