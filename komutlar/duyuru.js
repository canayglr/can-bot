const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  if (!message.guild) {
    return message.author.send(':x: `Bu Komut` komutu sadece sunucularda kullanılabilir.');
  }
if(!message.member.hasPermission(131072)) return message.reply('<a:canuyari:603528216275058718> Bu Komudu Kullanmak İçin ``everyone Atabilme`` Yetkiniz Olmalıdır !');
  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  const duyuru = new Discord.RichEmbed()
  .setColor(0xce0000)
  .setTimestamp()
  .setAuthor("DUYURU", message.author.avatarURL)
  .setDescription(mesaj);
  message.delete();
  message.channel.send(duyuru);
  message.channel.send('@everyone').then(message => message.delete(1000));
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dyr', 'dy'],
  permLevel: 3
};

exports.help = {
  name: 'duyuru',
  description: 'Duyuru Yapmanızı sağlar',
  usage: 'duyuru [mesaj]'
};

