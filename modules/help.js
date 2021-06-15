const std = require('../lib/bot.js');
const db = require('../etc/obj/help.json');

module.exports = function help(msg){
    let text="";
    for(let i=0;i<db.cat.length;i++){
        text = text + "**"+db.cat[i]+"**: \n";
        for(let j=0;j<db.desc[i].length;j++){
            text = text + db.desc[i][j] + "\n";
        }
    }
        var embed = new std.Discord.MessageEmbed()
        .setColor(0x00ff00)
        .setTitle('0x1d help')
        .setDescription(text)
        .setFooter(std.footer);
    msg.channel.send(embed);
    std.logs('>>help', msg);
}
