const std = require('../lib/bot.js');

const db = require('../etc/obj/beta.json');

module.exports = function indev(msg){
    let str;
    if(msg.content.startsWith(std.prefix + 'indev')) str = db.en;
    else str = db.ru;
    let embed = new std.Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setTitle('0x1d indev functions')
    .setDescription(str)
    .setFooter(std.footer);
    msg.channel.send(embed);
    std.logs('>>indev', msg);
    return 0;
}