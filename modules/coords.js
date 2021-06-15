const std = require('../lib/bot.js');
const num = require('../lib/num.js');

module.exports = function coords(msg){
    msg.channel.send(num.rand(-1000000, 1000000)+' '+num.rand(-1000000, 1000000));
    std.logs('>>coords', msg);
}