const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");

const random_kişilik = [
  "🐼 Yıkık",
  "🌟 Zeki",
  "🐵 Yavşak",
  "🐉 Çevik",
  "⚡️ Mizahşör",
  "🦋 Sıcak Kanlı",
  "💩 Soytarı",
  "🙊 Sap",
  "🐺 Saf",
  "🦁 Koca Yürekli",
  "🐓 Korkak",
  "🌈 Hayalperest",
  "🐨 Tembel",
  "🐞 Çalışkan",
  "🦅 Karizma",
  "🐍 Sinsi",
  "💐 Titiz",
  "🐐 İnatçı",
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = (client, message, args) => {
	var kişiliktest = message.mentions.users.first();
	if(!kişiliktest) {
    message.reply("Kişilik Testi Yapılıyor...")
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + message.author.tag + " **-kişiliktesti** Komutunu Kullandı ! [" + message.guild.name + "]");
    let kişilikt = new Discord.RichEmbed()
  .setImage(message.author.avatarURL)
  .setColor("RANDOM")
  .addField(random_kişilik[Math.floor(Math.random() * random_kişilik.length)], "%" + getRandomInt(1, 100), true)
  .addField(random_kişilik[Math.floor(Math.random() * random_kişilik.length)], "%" + getRandomInt(1, 100), true)
  .addField(random_kişilik[Math.floor(Math.random() * random_kişilik.length)], "%" + getRandomInt(1, 100), true)
  .addField(random_kişilik[Math.floor(Math.random() * random_kişilik.length)], "%" + getRandomInt(1, 100), true)
  .setTitle("**" + message.author.tag + " İşte Senin Kişiliğin**")
  message.channel.send(kişilikt)
 }else{
    message.reply("Kişilik Testi Yapılıyor...")
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + message.author.tag + " **< -kişiliktesti ** @" + kişiliktest.username + "**>** Komutunu Kullandı ! [" + message.guild.name + "]");
    let kişilikt = new Discord.RichEmbed()
    .setImage(kişiliktest.avatarURL)
    .setColor("RANDOM")
    .addField(random_kişilik[Math.floor(Math.random() * random_kişilik.length)], "%" + getRandomInt(1, 100), true)
    .addField(random_kişilik[Math.floor(Math.random() * random_kişilik.length)], "%" + getRandomInt(1, 100), true)
    .addField(random_kişilik[Math.floor(Math.random() * random_kişilik.length)], "%" + getRandomInt(1, 100), true)
    .addField(random_kişilik[Math.floor(Math.random() * random_kişilik.length)], "%" + getRandomInt(1, 100), true)
    .setTitle("**" + kişiliktest.username + " İşte Senin Kişiliğin**")
    message.channel.send(kişilikt)
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
  name: 'kişiliktesti',
  description: 'Eğlenceli Bir Kişilik Testi Yapar',
  usage: 'kişiliktesti veya kişiliktesti <@kişi>'
};
