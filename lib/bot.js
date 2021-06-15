const Discord = require('discord.js');
const fs = require('fs');
const logfile = 'log.txt';
const footer = 'loxotroller, 2020. Bot site: https://0x1d.netlify.app';
const bot = new Discord.Client();
fs.open(logfile, 'a', (err) => {
    if(err) throw err;
    console.log('Logs file opened');
});
function workIt(num){
    if(num < 10) return '0'+num;
    else return num;
}
function writeLog(str){
    let realStr;
    let date = new Date();
    realStr = '['+ workIt(date.getDate())+'.'+workIt(date.getMonth()+1)+'.'+date.getFullYear()+'  '+workIt(date.getHours())+':'+workIt(date.getMinutes())+'] ' + str;
    console.log(realStr);
    //realStr=realStr+'\n';
    //fs.appendFile(logfile, realStr, (err) => {if(err) throw err;});
}
function logs(command, message, user2=null){
    let str=command+' ran by '+message.author.tag;
    if(command == '>>avatar' || command == '>>аватар') str=str+' for '+user2.tag;
    if(message.guild != null) str=str+' in '+message.guild.name;
    writeLog(str);
}
function errorAlert(errorMsg, channel, errType = 0, details = null){
    let str;
    if(errType == 0) str = '**Warning**';
    else if(errType == 1) str = '**Error**';
    else if(errType == 2) str = '**Fatal error**';
    str = str + ': '+errorMsg;
    if(details) str = str + "\n**Details**: "+details;
    let embed = new Discord.MessageEmbed()
        .setColor(0x00ff00)
        .setTitle('$h1t_0f_p1ece error system')
        .setDescription(str);
    channel.send(embed);
    writeLog(str);
}
module.exports = { Discord, writeLog, logs, errorAlert, footer, bot };