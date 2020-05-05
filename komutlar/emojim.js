const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'https://cdn.discordapp.com/emojis/595733556836171777.gif',
'https://cdn.discordapp.com/emojis/601092507727560705.gif',
'https://cdn.discordapp.com/emojis/534297587558121472.gif',
'https://cdn.discordapp.com/emojis/594616455233011712.gif',
'https://cdn.discordapp.com/emojis/583914562168815628.gif',
'https://cdn.discordapp.com/emojis/595733563706572809.gif',
'https://cdn.discordapp.com/emojis/601089437559947284.png',
'https://cdn.discordapp.com/emojis/601100767931138058.png',
'https://cdn.discordapp.com/emojis/601100007654817802.png',
'https://cdn.discordapp.com/emojis/574530842563444747.png',
'https://cdn.discordapp.com/emojis/601100164223991868.png',
'https://cdn.discordapp.com/emojis/601100246801711104.png',
'https://cdn.discordapp.com/emojis/601100093562683394.png',
'https://cdn.discordapp.com/emojis/601100060226224159.png',
'https://cdn.discordapp.com/emojis/601100643670687756.png',
];
var postver = Math.floor(Math.random()*Random.length);
const post= new Discord.RichEmbed()
.setImage(`${Random[postver]}`)
.setColor("RANDOM")
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL)
.setAuthor('İşte Senin Emojin !')
message.channel.send(post)
.then(embedMessage => {
		embedMessage.react("603193080656429069");
	});
client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + message.author.tag + " **-emojim** Komutunu Kullandı ! [" + message.guild.name + "]");
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['moodum','mood'],
permLevel: 0
};

exports.help = {
name: 'emojim',
description: 'Rastgele Eğlenceli Postlar Gösterir',
usage: 'emojim'
};