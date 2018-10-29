const fs = require("fs")
const economy = require ("discord-eco")
const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
if (message.content.indexOf(process.env.PREFIX) !== 0) return; 

let userData = JSON.parse(fs.readFileSync('Storage/UserData.json'));

let sender = message.author

if(!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
if(!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 1000;

fs.writeFile('Storage/UserData.json', JSON.stringify(userData), (err) => {
 if (err) console.log(err);
 })
 
  economy.fetchBalance(message.author.id + message.guild.id).then((i) => {
  
 let moneyz = userData[sender.id + message.guild.id].money;
 let moneyzz = new Discord.RichEmbed()
 .setColor("RED")
 .setTitle("Botiso™ Balance Command")
 .addField("➭ Account Holder", `<@${message.author.id}>`, true)
 .addField("➭ Your Balance", "$" + moneyz, true)
 .addField("➭ Lifetime Balance", "**Coming Soon..**", true)
 .setFooter("WARNING: This System Is Not Finished")
 .setTimestamp()
 
 console.log(`${message.author.tag} Has Used The Bal Command`)
 message.channel.send(moneyzz)
  });
}
  
 module.exports.help = {
 name: "bal"
 }
