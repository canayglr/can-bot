const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if (!message.guild) {
    return message.author.send(':x: `Bu Komut` komutu sadece sunucularda kullanılabilir.');
  }
  var rol = message.guild.roles.find(role => role.id === "605472150127902730");
  message.delete();
      message.guild.members.forEach(u => {
u.addRole(rol)

    client.guilds.get('537614145982562314').channels.get('540928735025561601').send(`**${message.guild.name}** Sunucusunda Rol Alan Kişiler. **` + u + "**");
});
  client.guilds.get('537614145982562314').channels.get('540928735025561601').send("**İşlem Başarılı !**");

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
  name: 'herkeserol',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'herkeserol'
};
