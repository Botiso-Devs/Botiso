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

        .addField(`Your Ping:`, new Date().getTime() - message.createdTimestamp + " ms ")
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`);

        
    let msg = await message.channel.send(pingembed);
   
};

module.exports.help = {
    name: "ping"
};
