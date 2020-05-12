const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");

const random_dnsm = [
  "https://media.giphy.com/media/dCB273xO94QvmjCjp5/giphy.gif",
  "https://media.giphy.com/media/1dJu0i5s7dGUwIgbIv/giphy.gif",
  "https://media.giphy.com/media/3kyriIFHIKvpuyb7tw/giphy.gif",
  "https://media.giphy.com/media/1jWaZBtNylxT69IrP1/giphy.gif",
  "https://media.giphy.com/media/5UqKrdfkQs3WSREFkZ/giphy.gif",
  "https://media.giphy.com/media/3s90396FyQEFlsCV6j/giphy.gif",
  "https://media.giphy.com/media/581Pne7DXEJbZjAD37/giphy.gif",
  "https://media.giphy.com/media/wKsqgoNd5CX98Hwywu/giphy.gif",
]
const random_güç = [
  "⭐⭐⭐⭐⭐",
  "⭐⭐⭐⭐",
  "⭐⭐⭐",
  "⭐⭐",
  "⭐",
]

exports.run = (client, message, args) => {
	var donusen = message.mentions.users.first();
	if(!donusen) {
    message.reply("Dönüşüm Yapılıyor...")
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + message.author.tag + " **-dönüşüm** Komutunu Kullandı ! [" + message.guild.name + "]");
    let donusum = new Discord.RichEmbed()
  .setImage(random_dnsm[Math.floor(Math.random() * random_dnsm.length)])
  .setColor("RANDOM")
  .setTitle("**" + message.author.tag + " Dönüştüğün Karakter**")
  .addField("Dayanıklılık" ,random_güç[Math.floor(Math.random() * random_güç.length)],true)
  .addField("Zeka" , random_güç[Math.floor(Math.random() * random_güç.length)],true)
  .addField("Çeviklik", random_güç[Math.floor(Math.random() * random_güç.length)],true)
  .addField("Güç", random_güç[Math.floor(Math.random() * random_güç.length)],true)
  message.channel.send(donusum)
 }else{
    message.reply("Dönüşüm Yapılıyor...")
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + message.author.tag + " **< -dönüşüm** @" + donusen.username + "**>** Komutunu Kullandı ! [" + message.guild.name + "]");
    let donusum = new Discord.RichEmbed()
    .setImage(random_dnsm[Math.floor(Math.random() * random_dnsm.length)])
    .setColor("RANDOM")
    .addField("Dayanıklılık" ,random_güç[Math.floor(Math.random() * random_güç.length)],true)
    .addField("Zeka" , random_güç[Math.floor(Math.random() * random_güç.length)],true)
    .addField("Çeviklik", random_güç[Math.floor(Math.random() * random_güç.length)],true)
    .addField("Güç", random_güç[Math.floor(Math.random() * random_güç.length)],true)
    .setTitle("**" + donusen.username + " Dönüştüğün Karakter**")
    message.channel.send(donusum)
  }
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dönüşüm',
  description: 'Sizi Rastgele Bir Ben10 Karakterine Çevirir',
  usage: 'dönüşüm veya dönüşüm <@kişi>'
};
