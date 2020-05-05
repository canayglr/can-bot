const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const yardım = new Discord.RichEmbed()
    .setColor(0xff8000)
    .setTimestamp()
    .setAuthor("• YETKİLİ KOMUTLARI •")
    .addField('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑', '')
    .addField('**-duyuru** <:canright:603301130730078219> Duyuru Yapmanızı Sağlar', '**-temizle** <:canright:603301130730078219> Belirlenen Miktar Mesajı Siler.')
    .addField('**-nick** <:canright:603301130730078219> Kullanıcının İsmini Değiştirir.', '**-çekiliş** <:canright:603301130730078219> Sunucuda Bir Çekiliş Başlatır')
	  .addField('**-rolver** <:canright:603301130730078219> Belirlenen Rolü Kullanıcıya Verir. ', '**-rolal** <:canright:603301130730078219> Belirlenen Bir Rolü Kullanıcıdan Alır.')
    .addField('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑', '')
    .setFooter("CAN - Türkiyenin Eğlence Botu")
    return message.author.sendEmbed(yardım); }
    if (message.channel.type !== 'dm') {
     const yardım = new Discord.RichEmbed()
    .setColor(0xff8000)
    .setTimestamp()
    .setAuthor("• YETKİLİ KOMUTLARI •")
    .addField('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑', '')
    .addField('**-duyuru** <:canright:603301130730078219> Duyuru Yapmanızı Sağlar', '**-temizle** <:canright:603301130730078219> Belirlenen Miktar Mesajı Siler.')
    .addField('**-nick** <:canright:603301130730078219> Kullanıcının İsmini Değiştirir.', '**-çekiliş** <:canright:603301130730078219> Sunucuda Bir Çekiliş Başlatır')
    .addField('**-rolver** <:canright:603301130730078219> Belirlenen Rolü Kullanıcıya Verir. ', '**-rolal** <:canright:603301130730078219> Belirlenen Bir Rolü Kullanıcıdan Alır.')
    .addField('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑', '')
    .setFooter("CAN - Türkiyenin Eğlence Botu")
    return message.channel.sendEmbed(yardım);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkiliyardım', 'yetkilibilgi', 'yetkiliinfo'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili Komutları Hakkında Bilgi Verir',
  usage: 'yetkili'
};
