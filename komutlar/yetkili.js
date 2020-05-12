const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const yardım = new Discord.RichEmbed()
    .setColor(0xff8000)
    .setTimestamp()
    .setAuthor("• YETKİLİ KOMUTLARI •")
    .addField('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑', '<a:asagi:708475673232146508>')
    .addField('**-duyuru** <:canright:603301130730078219> Duyuru Yapmanızı Sağlar', '**-temizle** <:canright:603301130730078219> Belirlenen Miktar Mesajı Siler.')
    .addField('**-nick** <:canright:603301130730078219> Kullanıcının İsmini Değiştirir.', '**-çekiliş** <:canright:603301130730078219> Sunucuda Bir Çekiliş Başlatır')
	  .addField('**-rolver** <:canright:603301130730078219> Belirlenen Rolü Kullanıcıya Verir. ', '**-rolal** <:canright:603301130730078219> Belirlenen Bir Rolü Kullanıcıdan Alır.')
    .addField('**-tag-rol** <:canright:603301130730078219> Belirtilen Tagdaki Üyelere Belirtilen Rolü Verir', '**-tagtarama** <:canright:603301130730078219> Belirtilen Taga Sahip Üyeleri Gösterir')    
    .addField('**-rol-üyeleri** <:canright:603301130730078219> Belirlenen Role Sahip Olan Üyeleri Gösterir', '**-yetkilisay** <:canright:603301130730078219> Sunucunuzdaki Yetkilileri Sayar')
    .addField('**-toplumute** <:canright:603301130730078219> Bulunduğunuz Kanaldaki Kullanıcıları Susturur', '**-üye-temizle** <:canright:603301130730078219> Seçtiğiniz Üyenin Mesajlarını Temizler !')   
    .addField('<a:yukari:708475674523861083>', '๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑')
    .setFooter("CAN - Türkiyenin Eğlence Botu")
     message.author.sendEmbed(yardım); }
    if (message.channel.type !== 'dm') {
     const yardım = new Discord.RichEmbed()
    .setColor(0xff8000)
    .setTimestamp()
    .setAuthor("• YETKİLİ KOMUTLARI •")
    .addField('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑', '<a:asagi:708475673232146508>')
    .addField('**-duyuru** <:canright:603301130730078219> Duyuru Yapmanızı Sağlar', '**-temizle** <:canright:603301130730078219> Belirlenen Miktar Mesajı Siler.')
    .addField('**-nick** <:canright:603301130730078219> Kullanıcının İsmini Değiştirir.', '**-çekiliş** <:canright:603301130730078219> Sunucuda Bir Çekiliş Başlatır')
    .addField('**-rolver** <:canright:603301130730078219> Belirlenen Rolü Kullanıcıya Verir. ', '**-rolal** <:canright:603301130730078219> Belirlenen Bir Rolü Kullanıcıdan Alır.')
    .addField('**-tag-rol** <:canright:603301130730078219> Belirtilen Tagdaki Üyelere Belirtilen Rolü Verir', '**-tagtarama** <:canright:603301130730078219> Belirtilen Taga Sahip Üyeleri Gösterir')    
    .addField('**-rol-üyeleri** <:canright:603301130730078219> Belirlenen Role Sahip Olan Üyeleri Gösterir', '**-yetkilisay** <:canright:603301130730078219> Sunucunuzdaki Yetkilileri Sayar')
    .addField('**-toplumute** <:canright:603301130730078219> Bulunduğunuz Kanaldaki Kullanıcıları Susturur', '**-üye-temizle** <:canright:603301130730078219> Seçtiğiniz Üyenin Mesajlarını Temizler !')   
    .addField('<a:yukari:708475674523861083>', '๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑')
    .setFooter("CAN - Türkiyenin Eğlence Botu")
     message.channel.sendEmbed(yardım);
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");  
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
