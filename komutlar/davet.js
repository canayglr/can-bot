const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type === 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Botumuzun Davet Linki !', `[Tıkla <a:tiklaa:605726140723757077>](https://discordapp.com/oauth2/authorize?client_id=536627383743283230&scope=bot&permissions=8)`, true)
    .setThumbnail('https://cdn.discordapp.com/emojis/601760026071400458.gif')
    message.author.sendEmbed(ozelmesajkontrol)}
  if (message.channel.type !== 'dm') {
	const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Botumuzun Davet Linki !', `[Tıkla <a:tiklaa:605726140723757077>](https://discordapp.com/oauth2/authorize?client_id=536627383743283230&scope=bot&permissions=8)`, true)
    .setThumbnail('https://cdn.discordapp.com/emojis/601760026071400458.gif')
    message.channel.sendEmbed(pingozel)}
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};
exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
