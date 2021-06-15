const std = require('../lib/bot.js');

module.exports = function avatar(msg){
    var user = msg.mentions.users.first();
    if(!user) user = msg.author;
    let embed = new std.Discord.MessageEmbed()
        .setColor(0x00ff00)
        .setTitle('Avatar of '+ user.tag)
        .setImage(user.displayAvatarURL()+"?size=1024")
        .setFooter(std.footer);
    msg.channel.send(embed);
    std.logs('>>avatar', msg, user);
    return 0;
}