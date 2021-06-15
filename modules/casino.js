const std = require('../lib/bot.js');
const num = require('../lib/num.js');

module.exports = function casino(msg){
    let randomNum = num.findNum(msg.cleanContent);
    if(randomNum == 0) randomNum = [3];
    randomNum = randomNum[0];
    if(randomNum < 1) {randomNum = 3; msg.react('🤡');}
    let mass = [];
    for(let i = 0;i<3;i++){
        mass.push(num.rand(0, randomNum));
    }
    let str = '_**()** '+mass[0]+' **)** '+mass[1]+' **)** '+mass[2]+' **)**_\n\n';
    let casino_footer;
    if(mass[0]==mass[1] && mass[1]==mass[2]){
        casino_footer = msg.author.tag+', you won!';
    }
    else{
        casino_footer = msg.author.tag+', you lost!';
    }
    let embed = new std.Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setTitle('Loxotroller\'s casino')
    .setDescription(str)
    .setFooter(casino_footer+'\n\n'+std.footer);
    msg.channel.send(embed);
    std.logs('>>casino', msg);
}