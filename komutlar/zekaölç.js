const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");

const random_zeka = [
  ":writing_hand:️ Görsel Zeka",
  "🧐 Sözel Zeka ",
  ":cowboy: Bedensel Zeka",
  ":notes: Müziksel Zeka",
  "🤩 Sosyal Zeka",
  ":smirk: Kişisel Zeka",
  ":rolling_eyes: Doğal Zeka",
]
const random_ıq = [
      "20-34 Embesil",
      "35-49 Yüksek Derecede Zeka Geriliği",
      "50-69 Orta Derecede Zeka Geriliği",
      "70-79 Düşük Derecede Zeka Geriliği",
      "80-89 Donuk Normal",
      "90-109 Normal Zeka",
      "110-119 Parlak Zeka",
      "120-129 Üstün Zeka",
      "130-139 Çok Üstün Zeka",
      "140-149 Neredeyse Dahi",
      "150+ Dahi",
]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = (client, message, args) => {
	var zekatest = message.mentions.users.first();
	if(!zekatest) {
    if (message.author.id === '309097962120806400') {
      message.reply("Zeka Testi Yapılıyor...")
      let zkt = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
    .setColor(0x00ffff)
    .addField("💡 IQ", "%10000", true)
    .setTitle("**Kafaya Bak Elmas Kafa Mübarek Bu Adam Atomu Siker Amk**")
      message.channel.send(zkt)
   }else{
     if (message.author.id === '314107774080385057') {
       message.reply("Zeka Testi Yapılıyor...")
       let zkt = new Discord.RichEmbed()
     .setImage(message.author.avatarURL)
     .setColor(0x804000)
     .addField("💡 IQ", "%-5000", true)
     .setTitle("**Warband Oynamaktan Kafanla Götün Yer Değiştirmiş Amk**")
       message.channel.send(zkt)
    }else{
    if (message.author.id === '402183419200798721') {
      message.reply("Zeka Testi Yapılıyor...")
      let zkt = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
    .setColor(0x804000)
    .addField("💡 IQ", "%-100", true)
    .setTitle("**Sistemi Çökerttin Napıyosun Aq**")
      message.channel.send(zkt)
   }else{
    message.reply("Zeka Testi Yapılıyor...")
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + message.author.tag + " **-zekaölç** Komutunu Kullandı ! [" + message.guild.name + "]");
    let zeka = new Discord.RichEmbed()
  .setImage(message.author.avatarURL)
  .setColor("RANDOM")
  .addField(random_zeka[Math.floor(Math.random() * random_zeka.length)], "%" + getRandomInt(1, 100), true)
  .addField(random_zeka[Math.floor(Math.random() * random_zeka.length)], "%" + getRandomInt(1, 100), true)
  .addField(random_zeka[Math.floor(Math.random() * random_zeka.length)], "%" + getRandomInt(1, 100), true)
  .addField("💡 IQ ", random_ıq[Math.floor(Math.random() * random_ıq.length)], true)
  .setTitle("**" + message.author.tag + " İşte Senin Zekan**")
  message.channel.send(zeka)
}}}
 }else{
    message.reply("Zeka Testi Yapılıyor...")
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + message.author.tag + " **< -zekaölç ** @" + zekatest.username + "**>** Komutunu Kullandı ! [" + message.guild.name + "]");
    let zeka = new Discord.RichEmbed()
    .setImage(zekatest.avatarURL)
    .setColor("RANDOM")
    .addField(random_zeka[Math.floor(Math.random() * random_zeka.length)], "%" + getRandomInt(1, 100), true)
    .addField(random_zeka[Math.floor(Math.random() * random_zeka.length)], "%" + getRandomInt(1, 100), true)
    .addField(random_zeka[Math.floor(Math.random() * random_zeka.length)], "%" + getRandomInt(1, 100), true)
    .addField("💡 IQ ", random_ıq[Math.floor(Math.random() * random_ıq.length)], true)
    .setTitle("**" + zekatest.username + " İşte Senin Zekan**")
    message.channel.send(zeka)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'zekaölç',
  description: 'Zekanızı Ölçmeye Yarar',
  usage: 'zekaölç veya zekaölç <@kişi>'
};
