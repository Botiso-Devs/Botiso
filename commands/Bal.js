const fs = require("fs")
module.exports.run = async (bot, message, args) => {
if (message.content.indexOf(process.env.PREFIX) !== 0) return; 

if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
if (!userData[swnder.id + message.guild.id].money userData[sender.id + message.guild.id].money = 1000;

fs.writeFile("Storage/userData.json", JSON.stringify(userData), (err) -> {
  if (err) console.log(err);
})

let UserData = JSON.parse(fs.readFileSync('Storage/UserData.json, 'utf8'));
let sender = message.author
let moneyz = userData[sender.id + message.guild.id].money

message.channel.send(moneyz)
