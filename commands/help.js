const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  if 
    (message.content.indexOf(process.env.PREFIX) !== 0) return;    
   let msg = message.channel.send("◇◆**__Help Under Devlopment__**◆◇")
  
  let bicon = bot.user.avatarURL
  
   let help = new Discord.RichEmbed()
   .setColor("RED")
   .setTitle("Botiso™ Help Command")
   .setTimestamp()
   .setFooter(`Requested By ${message.author.username}`, `${message.author.avatarURL}`)
   .addField("General Commands", "*Coming Soon*", true)
   .addField("Fun Commands", "*Coming Soon*", true)
   .addField("Modaration Commands", "[`Mute`]", true) 
   .addField("Music Commands", "*Coming Soon*", true)
   .addField("Extra Commands", "*Coming Soon*", true)
   .setThumbnail(bicon)
   
   message.delete()
   message.channel.send(help)
   
}
    
    module.exports.help = {
             name: "help"
}
