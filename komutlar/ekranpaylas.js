const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send(new Discord.RichEmbed().setDescription("Bir sesli kanalda değilsiniz!").setColor('RANDOM'));
  else message.channel.send(new Discord.RichEmbed().setDescription(`**[Ekran Paylaşımı](https://discordapp.com/channels/${message.guild.id}/${message.member.voiceChannel.id})**`).setColor('RANDOM'));
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");  

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ekran-paylaş', 'ekranpaylas', 'ekran-paylas'],
  permLevel: 0
};

exports.help = {
  name: 'ekranpaylaş',
  description: 'Sesli kanalda ekran paylaşmanızı sağlar.',
  usage: 'ekranpaylaş',
  kategori: 'kullanıcı'
};