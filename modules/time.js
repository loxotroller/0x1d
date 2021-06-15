const std = require('../lib/bot.js');
const num = require("../lib/num.js");

function workIt(num){
    if(num < 10) return '0'+num;
    else return num;
}
function workTO(num){
    if(num > 0) return '+'+num;
}

module.exports = function time(msg){
    let date = new Date();
    let dateStr = workIt(date.getDate())+'.'+workIt(date.getMonth()+1)+'.'+date.getFullYear()+'  '+workIt(date.getHours())+':'+workIt(date.getMinutes());
    let weekday;
    if(num.findWord(msg.cleanContent, /время/)){
        switch(date.getDay()){
            case 0:{weekday="Воскресенье"; break;}
            case 1:{weekday="Понедельник"; break;}
            case 2:{weekday="Вторник"; break;}
            case 3:{weekday="Среда"; break;}  
            case 4:{weekday="Четверг"; break;}
            case 5:{weekday="Пятница"; break;}
            case 6:{weekday="Суббота"; break;}
        }
    }
    else{
        switch(date.getDay()){
            case 0:{weekday="Sunday"; break;}
            case 1:{weekday="Monday"; break;}
            case 2:{weekday="Tuesday"; break;}
            case 3:{weekday="Wednesday"; break;}  
            case 4:{weekday="Thirsday"; break;}
            case 5:{weekday="Friday"; break;}
            case 6:{weekday="Saturday"; break;}
        }
    }
    let str = weekday+', UTC '+ workTO(-(date.getTimezoneOffset()/60));
    let embed = new std.Discord.MessageEmbed()
        .setColor(0x00ff00)
        .setTitle(dateStr)
        .setDescription(str)
        .setFooter(std.footer);
    msg.channel.send(embed);
    std.logs(">>time", msg);
}