const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const yardım = new Discord.RichEmbed()
    .setColor(0xffff00)
    .setTimestamp()
    .setAuthor("• YARDIM •")
    .addField('**<a:canyildiz:601758557175676928> -eğlence** ', 'Eğlence Komutlarını Gösterir')
    .addField("**<a:canyildiz:601758557175676928> -yetkili**","Yetkili komutlarını Gösterir")
    .addField('**<a:canyildiz:601758557175676928> -kullanıcı**', 'Kullanıcı Komutlarını Gösterir')
    .addField('**<a:canyildiz:601758557175676928> -yenilik**', 'Yeni Özellikleri Gösterir')
    .setImage("https://cdn.discordapp.com/attachments/537167775555125249/603990589234741269/ezgif.com-gif-maker.gif")
    .setFooter("Botumuza Her Geçen Gün Yeni Özellikler Eklenmektedir !")
    return message.author.sendEmbed(yardım); }
    if (message.channel.type !== 'dm') {
      const yardım = new Discord.RichEmbed()
    .setColor(0xffff00)
    .setTimestamp()
    .setAuthor("• YARDIM •")
    .addField('**<a:canyildiz:601758557175676928> -eğlence** ', 'Eğlence Komutlarını Gösterir')
    .addField("**<a:canyildiz:601758557175676928> -yetkili**","Yetkili komutlarını Gösterir")
    .addField('**<a:canyildiz:601758557175676928> -kullanıcı**', 'Kullanıcı Komutlarını Gösterir')
    .addField('**<a:canyildiz:601758557175676928> -yenilik**', 'Yeni Özellikleri Gösterir')
    .setFooter("Botumuza Her Geçen Gün Yeni Özellikler Eklenmektedir !")
    .setImage("https://cdn.discordapp.com/attachments/537167775555125249/603990589234741269/ezgif.com-gif-maker.gif")
    return message.channel.sendEmbed(yardım);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info', 'help', 'bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm Komutlar Hakkında Bilgi Verir',
  usage: 'yardım'
};
