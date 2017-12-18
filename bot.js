var Discord = require('discord.js');

var discordBotToken = 'MzkyMjIwNTg3OTk4ODM4Nzk1.DRk6UA.bTyrKUuEG-o8_wC8QSTckpuigOA';
var prefix = '';

//GameRole Bot


var client = new Discord.Client();

         

client.on("message", function(message) { 
    if (message.content == "informatica") {
        message.channel.sendMessage("keuzeopdracht periode 3 ");
    }
 });


client.login(process.env.BOT_TOKEN);


