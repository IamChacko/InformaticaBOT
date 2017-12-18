var Discord = require('discord.js');

var discordBotToken = 'MzQ2NzQ2NDE1MjY0OTU2NDI4.DPD7VQ.SsCmKi3rx3nMK6pL7vnya1KuUzo';
var prefix = '';

//GameRole Bot
var roleGame = {
  "csgo": {
    name: "counter-strike global offensive",
    id: ''
  },
  "PUBG": {
    name: "playerunknown's battlegrounds",
    id: ''
  },
  "overwatch": {
    name: "overwatch",
    id: ''
  },
  "fortnite": {
    name: "fortnite",
    id: ''
  }
};



var client = new Discord.Client();

function collectRoleIds() {
  client.guilds.forEach( function(server) {
    server.roles.forEach( function(role) {
      for (var gKey in roleGame) {
        if (prefix + gKey === role.name) {
          roleGame[gKey]['id'] = role.id;
        }
      }
    });
  });
}

function registeredGame(game) {
  for (var gKey in roleGame) {
    if ((game !== null && game.name !== undefined) && roleGame[gKey].name === game.name.toLowerCase()) {
      return gKey;
    }
  }

  return false;
}

client.on('presenceUpdate', (oldUser, newUser) => {
  if (oldUser.presence.game !== newUser.presence.game) {
    if (oldUser.presence.game !== null && oldUser.presence.game !== null) {
      var oldGame = registeredGame(oldUser.presence.game);
      if (oldGame) {
        newUser.removeRole(roleGame[oldGame].id, function (error) {
          if (error) console.log(error);
        });
      }te veel
    }

    if (newUser.presence !== null && newUser.presence.game !== null) {
      var gameId = registeredGame(newUser.presence.game);
      if (gameId) {
        newUser.addRole(roleGame[gameId].id, function (error) {
          if (error) console.log(error);
        });
        console.log(gameId);
      }
    }
  }
});

client.on('ready', () => {
  console.log('Bot is online');
  client.user.setStatus('online');
  client.user.setGame('Informatica H5D');

  collectRoleIds();
});

client.on("message", function(message) { 
    if (message.content == "informatica") {
        message.channel.sendMessage("keuzeopdracht periode 3 ");
    }
 });


client.login(process.env.BOT_TOKEN);


