const std = require('../lib/bot.js');
const num = require('../lib/num.js');

module.exports = function anon(msg){
    let target_id = num.findNum(msg.cleanContent);
    let embed = new std.Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setTitle("AMsg")
    .setDescription(msg.cleanContent.substring(7+18))
    .setFooter(std.footer);
    std.bot.users.fetch(target_id).then(user => {
        if(!user.dmChannel) user.createDM();
        user.dmChannel.send(embed);
    });
    
}