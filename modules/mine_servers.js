const ping = require('minecraft-server-util');
const std = require('../lib/bot.js');
const num = require('../lib/num.js');

module.exports = function pingserver(msg){
    let pingedServer = num.findWord(msg.cleanContent, /([a-z0-9_-]+(\.[a-z0-9_-]+)*\.)?[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,5}/g);
    if(pingedServer == -1) pingedServer = ['play.hypixel.net'];
    pingedServer = pingedServer[0];
    ping(pingedServer, 25565, (error, response) => {
        if (error) {
            if(num.findWord(error.toString(), /ReferenceError:/g)) std.writeLog(error);
            else if(num.findWord(error.toString(), /Error: Failed to hear back from server within specifiet timeout/g)){pingserver(msg);return 0;}
            else std.errorAlert(error.toString().substring(7), msg.channel, 1);
            return -1;
        }

        let rsp=  "**MC version**: "+response.version+"\n";
        rsp=rsp + "**Players online**:"+response.onlinePlayers+"\n";
        rsp=rsp + "**Players max**: "+response.maxPlayers+'\n';
        rsp=rsp + "**Server description**: "+response.descriptionText;

        //let attachment = new std.Discord.MessageAttachment(response.favicon, 'image0.jpg');
        let embed = new std.Discord.MessageEmbed()
        .setColor(0x00ff00)
        .setTitle("Info about "+pingedServer+":")
        .setImage('attachment://image0.jpg')
        //.setDescription(realPing(pingedServer, 25565, msg.channel))
        .setDescription(rsp)
        .setFooter(std.footer);
        
        msg.channel.send(embed);
        std.logs(">>mcserver", msg);
    });
}
