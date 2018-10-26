const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if
        (message.content.indexOf(process.env.PREFIX) !== 0) return;
  
  let puser = args.slice[22];

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
        .addField(`${puser}'s Ping:`, new Date().getTime() - message.createdTimestamp + " ms ")
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`);

        
    let msg = await message.channel.send(pingembed);
   await msg.react("5️⃣");
   await msg.react("4️⃣");
   await msg.react("3️⃣");
   await msg.react("2️⃣");
   await msg.react("1️⃣");
   await msg.delete();
        

};

module.exports.help = {
    name: "ping"
};
