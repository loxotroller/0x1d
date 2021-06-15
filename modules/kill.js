const std = require("../lib/bot.js");

module.exports = function console(msg){
    std.bot.users.fetch('689861802812637287').then(user => {
        if(user == msg.author){
            std.logs(">>stop", msg);
            process.exit();
        }
        else{
            std.errorAlert("You do not have permission to run this command!", msg.channel, 1);
        }
    });
}