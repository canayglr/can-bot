const Discord = require('discord.js');
const client = new Discord.Client()
const loglar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if (!message.guild) {
	  
    return message.author.send(':x: `HerkeseDm` komutu sadece sunucularda kullanılabilir.');
  }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Özel DM den göndermek İstediğiniz Mesajı Yazınız.');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
	  .setAuthor('CAN BOT')
	  .setTitle(`<a:igne:601758440020246528> **Botun Davet Linki :** https://discordbots.org/bot/536627383743283230`)
	  .setThumbnail('https://cdn.discordapp.com/attachments/537167775555125249/603990589234741269/ezgif.com-gif-maker.gif')
      .setDescription('<a:canyildiz:601758557175676928> Türkiyenin Yepyeni Eğlence Botu CAN Hizmetinizde ! Örnek olarak -zekaölç ve -kişiliktesti gibi bir çok güldüren ve özgün içerikler ekleyerek eğlenceli bir sohbet ortamına olanak sağlıyoruz , aynı zaman yetkililerimize yardımcı olmak için -otorol , -uyar gibi yardımcı komutlarda gönderebilir -stresçarkı diyerek stresçarkı çevirebilir ; -post yazarak rastgele postlara göz atabilirsiniz.<a:cantik:601758596937809941> Tüm bunları görmek için botumuzu discordunuza ekleyip -yardım komutu ile botun özelliklerine bakabilirsiniz. <a:canload:601758614058827777>')
      message.channel.guild.members.forEach(user => {
    user.send(mesajat);
    client.guilds.get('537614145982562314').channels.get('540928735025561601').send(`**${message.guild.name}** Sunucusunda Gönderilen Kişiler. **` + user + "**");
});
  client.guilds.get('537614145982562314').channels.get('540928735025561601').send("**Gönderilen Mesaj.** " + mesaj);

      //message.guild.users.forEach(u => {
//u.sendEmbed(mesajat)
//})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'tanit',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'tanit [duyurmak istediğiniz şey]'
};
