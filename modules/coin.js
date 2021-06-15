const std = require("../lib/bot.js");
const db = require("../etc/obj/coin.json");

function coinToss() {
    return Math.floor(Math.random() * 2);
}

module.exports = function coin(msg){
    let money = coinToss();
    let str;
    let attachment;
    if(money == 0){
        attachment = new std.Discord.MessageAttachment(db.heads, 'coin.png');
        str = "Орёл!";
    }
    else if(money == 1){
        attachment = new std.Discord.MessageAttachment(db.tails, 'coin.png');
        str = "Решка!";
    }
    let embed = new std.Discord.MessageEmbed()
        .attachFiles(attachment)
        .setColor(0x00ff00)
        .setTitle(str)
        .setImage('attachment://coin.png')
        .setFooter(std.footer);
    msg.channel.send(embed);
    std.logs(">>coin", msg);
}