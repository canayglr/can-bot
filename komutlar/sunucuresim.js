const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Uyarı <a:canuyari:603528216275058718>', '`sunucuresmi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
	.setImage(message.guild.iconURL)
     message.channel.sendEmbed(sunucubilgi);
    }
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-pp'],
  permLevel: 0
};

exports.help = {
  name: 'sunucuresmi',
  description: 'Sunucu Resminin Linkini Atar.',
  usage: 'sunucuresmi'
};
