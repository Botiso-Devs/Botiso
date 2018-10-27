const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if
    (message.content.indexOf(process.env.PREFIX) !== 0) return;

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("```You Do Not Have Sufficient Permissions To This Command```");
  if(!args[0]) return message.channel.send("```You Ro Not Have Sufficient Permissions To This Command```");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**Cleared ${args[0]} messages.**`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "purge"
}
