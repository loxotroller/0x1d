const std = require('../lib/bot.js');
var async = require("async");
var mysql = require("mysql"),
      cMysql = mysql.createPool({
      database : 'notes',
      host     : 'localhost',
      user     : '0x1d',
      password : 'really_strong_db',
      connectionLimit: 100
    });

module.exports = function data(msg){
    cMysql.getConnection(function(err,conn){
        if(err){std.errorAlert("MySQL died", msg.channel, 1, err); return 1;}
        else{
            conn.query("USE notes;");
            var last_id=0;
            conn.query("SELECT id FROM notebook ORDER BY id DESC LIMIT 1", function(er, results){
                if(er) std.errorAlert("MySQL error while getting last ID", msg.channel, 0, er);
                last_id=results[0].id;
            });
            let date = new Date();
            conn.query("INSERT INTO notebook VALUES("+last_id+1+", \""+msg.author.id+"\", \""+msg.cleanContent.substring(7)+"\", \""+date.getDate()+'.'+date.getMonth()+1+"\");", function(er){console.log(er)});
        }
        let embed = new std.Discord.MessageEmbed()
        .setColor(0x00ff00)
        .setTitle("Note created")
        .setFooter(std.footer);
        msg.channel.send(embed);
        std.logs('>>note', msg);
    });
}