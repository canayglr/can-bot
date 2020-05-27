const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type === 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Botumuzun Destek Sunucusu !', `[Tıkla <a:tiklaa:605726140723757077>](https://discord.gg/JSPNwt8)`, true)
    .setThumbnail('https://i.hizliresim.com/4tIxiy.png')
    message.author.sendEmbed(ozelmesajkontrol)}
  if (message.channel.type !== 'dm') {
	const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Botumuzun Destek Sunucusu !', `[Tıkla <a:tiklaa:605726140723757077>](https://discord.gg/JSPNwt8)`, true)
    .setThumbnail('https://i.hizliresim.com/4tIxiy.png')
    message.channel.sendEmbed(pingozel)
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['destek-sunucu', 'istek'],
  permLevel: 0
};
exports.help = {
  name: 'destek',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
