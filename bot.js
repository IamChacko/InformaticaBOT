// Opzet
var Discord = require('discord.js');
var client = new Discord.Client();

var discordBotToken = 'MzkyMjIwNTg3OTk4ODM4Nzk1.DRk6UA.bTyrKUuEG-o8_wC8QSTckpuigOA';



// Prefix
var prefix = '!';



// Bericht
client.on("message", function(message) { 
    if (message.content == "informatica") {
        message.channel.sendMessage("keuzeopdracht periode 3 ");
    }
 });


// Overdracht naar Heroku
client.login(process.env.BOT_TOKEN);


