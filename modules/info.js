const std = require('../lib/bot.js');

module.exports = function info(msg){
    let infostr = "Servers: "+std.bot.guilds.cache.size+' - ';
    let servers = Array.from(std.bot.guilds.cache.values());
    for(let i=0;i<std.bot.guilds.cache.size;i++){
        infostr += servers[i].name;
    }
    infostr += "\nProgramming language: JS\n";
    infostr += "Developer: loxotroller#4789\n";
    infostr += "Site: https://0x1d.netlify.app/";

    let embed = new std.Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setTitle("Bot info")
    .setDescription(infostr)
    .setFooter(std.footer);
    
    msg.channel.send(embed);
    std.logs('>>info', msg);
}