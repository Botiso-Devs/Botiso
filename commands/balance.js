const fs = require("fs")
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
 
 let moneyz = userData[sender.id + message.guild.id].money;
 
 let msg = await message.channel.send(moneyz)
 }
 
 module.exports.help = {
 name: "bal"
 }
