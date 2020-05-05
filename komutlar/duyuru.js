const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('<a:canuyari:603528216275058718> Bu Komudu Kullanmak İçin ``Mesajları Yönet`` Yetkiniz Olmalıdır !');
  if (!message.guild) {
    return message.author.send('<a:canx:616921650490900501> `Bu Komut` komutu sadece sunucularda kullanılabilir.');
  }
  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('<a:canuyari:603528216275058718> Yazmam için herhangi bir şey yazmalısın.');
  const duyuru = new Discord.RichEmbed()
  .setColor(0xce0000)
  .setTimestamp()
  .setAuthor("DUYURU", message.author.avatarURL)
  .setDescription(mesaj);
  message.delete();
  message.channel.send(duyuru);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dyr', 'dy'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'Duyuru Yapmanızı sağlar',
  usage: 'duyuru [mesaj]'
};
