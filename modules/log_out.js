const std = require("../lib/bot.js");

module.exports = function logout(msg){
    std.bot.users.fetch('689861802812637287').then(user => {
        if(user == msg.author){
            let attachment = new std.Discord.MessageAttachment("./log.txt", "log.txt");
            let embed = new std.Discord.MessageEmbed()
            .setColor(0x00ff00)
            .setTitle("Sending log...")
            .setFooter(std.footer)
            .attachFiles(attachment);
            msg.channel.send(embed);
            std.logs(">>log", msg);
        }
        else{
            std.errorAlert("You do not have permission to run this command!", msg.channel, 1);
        }
    });
}