const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const yenilikbilgi = new Discord.RichEmbed()
    .setColor(0xff0080)
    .setTimestamp()
    .setAuthor("• YENİLİK •")
		.addField('-eğlence' , 'Yepyeni Eğlence Komutları Geldi !')
		.addField('-yetkili', 'Sunucunuza Renk Katacak Harika Yenilikler Geldi !')
		.addField('-git , -çek', 'Etiketlediğiniz Kullanıcının Yanına Gidersiniz/Çekersiniz')
		.addField('-nick', 'Kullanıcının İsmini Değiştirirsiniz !')
		.addField('-yardım', 'Sistemi Değiştirildi')
    .addField('-destek', 'Destek Sunucumuz Açıldı !')
		.addField('Daha Fazla Komut İçin **-yardım** Yazmanız Yeterlidir' , 'Botun Davet Linkini Görmek İçin **-davet**')
     message.author.sendEmbed(yenilikbilgi); }
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
    .addField('-destek', 'Destek Sunucumuz Açıldı !')
		.addField('Daha Fazla Komut İçin **-yardım** Yazmanız Yeterlidir' , 'Botun Davet Linkini Görmek İçin **-davet**')
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");  

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
