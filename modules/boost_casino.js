const std = require('../lib/bot.js');
const num = require('../lib/num.js');

function winner(mass){
    let score = 0;
    //vertical
    if(mass[0] == mass[1] && mass[1] == mass[2]) score+=10;
    if(mass[3] == mass[4] && mass[4] == mass[5]) score+=10;
    if(mass[6] == mass[7] && mass[7] == mass[8]) score+=10;
    //horizontal
    if(mass[0] == mass[3] && mass[3] == mass[6]) score+=10;
    if(mass[1] == mass[4] && mass[4] == mass[7]) score+=10;
    if(mass[2] == mass[5] && mass[5] == mass[8]) score+=10;
    //diagonal
    if(mass[0] == mass[4] && mass[4] == mass[8]) score+=15;
    if(mass[2] == mass[4] && mass[4] == mass[6]) score+=15;
    //strike
    if(mass[0] == mass[1] && mass[1] == mass[2] && mass[2] == mass[3] && mass[3] == mass[4] && mass[4] == mass[5] && mass[5] == mass[6] && mass[6] == mass[7] && mass[7] == mass[8]) score+=100;
    return score;
}
module.exports = function boost_casino(msg){
    let randomNum = num.findNum(msg.cleanContent);
    if(randomNum == 0) randomNum = [3];
    randomNum = randomNum[0];
    if(randomNum < 1) {randomNum = 5; msg.react('🤡');}
    let mass = new Array(9);
    for(let i = 0; i<9; i++){
        mass[i] = num.rand(0, randomNum);
    }
    let str = '_**)** '+mass[0]+' **)** '+mass[1]+' **)** '+mass[2]+' **)**_\n';
    str = str + '_**)** '+mass[3]+' **)** '+mass[4]+' **)** '+mass[5]+' **)**_\n';
    str = str + '_**)** '+mass[6]+' **)** '+mass[7]+' **)** '+mass[8]+' **)**_\n';
    str = str + '\n\n' + msg.author.tag+', your score is '+winner(mass);
    let embed = new std.Discord.MessageEmbed()
    .setColor(0x00ff00)
    .setTitle('Loxotroller\'s boosted casino')
    .setDescription(str)
    .setFooter(std.footer);
    msg.channel.send(embed);
    std.logs('>>boost_casino', msg);
}