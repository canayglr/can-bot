const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if (!message.guild) {
    return message.author.send(':x: `HerkeseDm` komutu sadece sunucularda kullanılabilir.');
  }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Özel DM den göndermek İstediğiniz Mesajı Yazınız.');
  message.delete();
      message.channel.guild.members.forEach(user => {
    user.send(mesaj);
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
  aliases: ['dm'],
  permLevel: 4
};

exports.help = {
  name: 'herkesedm',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'herkesedm [duyurmak istediğiniz şey]'
};
