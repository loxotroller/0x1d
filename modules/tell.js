const std = require('../lib/bot.js');

module.exports = function tell(msg){
    let embed = new std.Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setTitle('Successfully sent to the developer!')
    .setFooter(std.footer);
    msg.channel.send(embed);
    let devembed = new std.Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setTitle("Сообщение от "+msg.author.tag)
    .setDescription(msg.cleanContent.substring(7));
    std.bot.users.fetch('689861802812637287').then(user => {
        user.dmChannel.send(devembed);
    });
    std.logs('>>tell', msg);
}
