const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const sayacuyari = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sayaç` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(sayacuyari); }
    if (message.channel.type !== 'dm') {
      const sayacbilgi = new Discord.RichEmbed()
    .setColor(0xff0000)
    .setTimestamp()
    .setAuthor("• SAYAÇ •")
    .addField('Kullanım ', '-sayaç <sayı>')
    .addField("Sayacı Sıfırlamak İçin","-sayaç şıfırla")
    .addField('**UYARI** :', 'Sayacın Çalışması İçin **Sayaç** İsminde Bir Kanal Açmayı Unutmayınız')
    .addField('**UYARI** :', 'Sayacın Çalışması İçin Sunucu Sayısından Daha Yüksek Bir Değer Girilmelidir')
    return message.channel.sendEmbed(sayacbilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayaçyardım'],
  permLevel: 0
};

exports.help = {
  name: 'sayaçbilgi',
  description: 'Sayaç Sistemi Hakkında Bilgi Verir',
  usage: 'sayaçbilgi'
};
