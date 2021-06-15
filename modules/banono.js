const std = require('../lib/bot.js');
const num = require('../lib/num.js');

const db = require("../etc/obj/banono.json");

module.exports = function banono(msg){
    let banonos = db.banonos;
    let embed = new std.Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setImage(banonos[num.rand(0, banonos.length)])
    .setFooter(std.footer);
    msg.channel.send(embed);
    std.logs('>>banono', msg);
}