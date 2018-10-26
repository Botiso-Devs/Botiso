const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if
    (message.content.indexOf(process.env.PREFIX) !== 0) return;

  if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("U Need Manage Message To Work This Command!");
  if(!args[0]) return message.channel.send("U Need Manage Message To Work This Command!");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "purge"
}
