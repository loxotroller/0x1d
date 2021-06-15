const std = require('./lib/bot.js');

let db = require("./conf/modules.json");
let prefix = db.prefix;
let tokenfile = require("./conf/token.json");
let token = tokenfile.token;
let req=[];

for(let i=0;i<db.lib.length;i++){
	req.push(require("./modules/"+db.lib[i]));
	std.writeLog("Loaded "+db.name[i][0]+" module. ");
}

std.bot.on('ready', () => { 
    /*std.bot.user.setPresence({
      status: "online",  //You can show online, idle....
      game: {
          name: ">>help",  //The message shown
          type: "WATCHING" //PLAYING: WATCHING: LISTENING: STREAMING:
      }
  })
  .catch(std.writeLog("Could not set presence!"));*/
  std.bot.user.setPresence({ game: { name: ">>help", type: 1, url: "https://0x1d.netlify.app/" } });
  std.writeLog(`${std.bot.user.username} started`);
  /*std.bot.generateInvite(473164881).then(link => { 
    console.log(link);
  });*/
});

std.bot.on('message', msg => {
    for(let i=0;i<db.name.length;i++){
      for(let j=0;j<db.name[i].length;j++){
        if(msg.content.startsWith(prefix + db.name[i][j])){
          req[i](msg);
        }
      }
    }
});

std.bot.login(token);
