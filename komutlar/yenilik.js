const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const yenilikbilgi = new Discord.RichEmbed()
    .setColor(0xff0080)
    .setTimestamp()
    .setAuthor("• YENİLİK •")
		.addField('-rolver , -rolal', 'Rol Verme, Alma Komutlarımız Aktif')
		.addField('-eğlence' , 'Yepyeni Eğlence Komutları Geldi !')
		.addField('-ototag', 'Ototag Artık Hizmetinizde Bilgi Almak İçin **-ototagbilgi**')
		.addField('-yetkilerim', 'Bulunduğunuz Sunucudaki Yetkilerinizi Görürsünüz !')
		.addField('-nick', 'Kullanıcının İsmini Değiştirirsiniz !')
		.addField('-yardım', 'Sistemi Değiştirildi')
		.addField('Daha Fazla Komut İçin **-yardım** Yazmanız Yeterlidir' , 'Botun Davet Linkini Görmek İçin **-davet**')
    return message.author.sendEmbed(yenilikbilgi); }
    if (message.channel.type !== 'dm') {
      const yenilikbilgi = new Discord.RichEmbed()
    .setColor(0xff0080)
    .setTimestamp()
		.setAuthor("• YENİLİK •")
    .addField('-rolver , -rolal', 'Rol Verme, Alma Komutlarımız Aktif')
    .addField('-eğlence' , 'Yepyeni Eğlence Komutları Geldi !')
    .addField('-yetkilerim', 'Bulunduğunuz Sunucudaki Yetkilerinizi Görürsünüz !')
    .addField('-nick', 'Kullanıcının İsmini Değiştirirsiniz !')
    .addField('-yardım', 'Sistemi Değiştirildi !')
    .addField('-öneri', 'Sistemi Geliştirildi !')
		.addField('Daha Fazla Komut İçin **-yardım** Yazmanız Yeterlidir' , 'Botun Davet Linkini Görmek İçin **-davet**')
    return message.channel.sendEmbed(yenilikbilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni', 'yenilikler', 'news'],
  permLevel: 0
};

exports.help = {
  name: 'yenilik',
  description: 'Yeni Özellikleri Gösterir !',
  usage: 'yenilik'
};
