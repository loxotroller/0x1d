const std = require('../lib/bot.js');
var db = [];
let prefix = ">>";

module.exports = function data(msg){
    if(msg.content.startsWith(prefix + 'note ')){
        db.push([msg.author.id, msg.cleanContent.substring()]);
        let embed = new std.Discord.MessageEmbed()
        .setColor(0x00ff00)
        .setTitle("Successfully created data!")
        .setFooter(std.footer);
        msg.channel.send(embed);
        std.logs('>>note', msg);
    }
    else if(msg.content.startsWith(prefix + 'notebook')){
        let str = "";
        for(let i=0;i<db.length;i++){
            if(db[i][0] == msg.author.id){
                str = str + db[i][1]+"\n";
            }
        }
        let embed = new std.Discord.MessageEmbed()
        .setColor(0x00ff00)
        .setTitle("All data for "+msg.author.tag+': ')
        .setDescription(str)
        .setFooter(std.footer);
        msg.channel.send(embed);
        std.logs('>>notebook', msg);
    }
    else if(msg.content.startsWith(prefix + 'notespurge')){
        for(let i=0;i<db.length;i++){
            if(db[i][0] == msg.author.id){
                db.splice(i, 1);
                i--;
            }
        }
        let embed = new std.Discord.MessageEmbed()
        .setColor(0x00ff00)
        .setTitle("All data for "+msg.author.tag+' have been successfully deleted!')
        .setFooter(std.footer);
        msg.channel.send(embed);
        std.logs('>>notespurge', msg);
    }
}
