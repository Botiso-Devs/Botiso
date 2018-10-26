const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  if 
    (message.content.indexOf(process.env.PREFIX) !== 0) return;
 function sendInfo(message, ip, port){
    queryfor = "Query for " + ip + " " + port + ""; 
    site = "https://use.gameapis.net/mcpe/query/extensive/" + ip + ":" + port;
    status = "Offline";
    list = null;
    plugins = null;
    
    let query = sendInfo(message, ip, port){ queryfor
    
    message.channel.send(query)
    
    modules.exports.help = {
     name: "query"
     }
