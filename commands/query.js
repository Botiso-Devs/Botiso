module.exports.run = async (bot, message, args) => {if (message.content.indexOf(process.env.PREFIX) !== 0) return; 
function sendInfo(message, ip, port){
    queryfor = "Query for " + ip + " " + port + ""; 
    site = "https://use.gameapis.net/mcpe/query/extensive/" + ip + ":" + port;
    status = "Offline";
    list = null;
    plugins = null;

    request({url: site, json: true}, (err, response, i) => {
        if(!err){
            console.log(i);
            if(i["status"] == true){
                status = "Online";
            }else{
                sendOffline(message, ip, port);
                return;
            }
            if(i["list"] == null){
                list = "None";
            }else{
                list = i["list"].join();
            }
            if(i["plugins"] == null){
                plugins = "None";
            }else{
                if(i["plugins"] == i["software"]){
                    plugins = i["software"];
                }else{
                    plugins = i["plugins"].join();
                }
            }

            message.channel.send(
                queryfor + " (" + i["players"]["online"] +"/" + i["players"]["max"] +")\n
" + 
                "Status: " + status + "\n" +
                "MOTD: " + i["motd"] + "\n" + 
                "IP: " + ip + "\n" + 
                "Port: " + port + "\n" +
                "Protocol: " + i["protocol"] + "\n" +
                "Version: " + i["version"] + "\n" +
                "Software: " + i["software"] + "\n" +
                "Map: " + i["map"] + "\n" +
                "List: " + list + "\n" +
                "Plugins: " + plugins + "\n" +
                "Cached: " + i["cached"] + "
"
                );
        }
    });
} 

module.exports.help = {
name: "query"
}
