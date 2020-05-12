const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  let rol = message.mentions.roles.first() || message.guild.roles.find(rol => rol.name === args.join(' ')) || message.guild.roles.get(args[0]);
  if (!rol) return message.reply('<a:canuyari:603528216275058718> Böyle bir rol bulunamadı!');
  message.channel.send(`${rol.members.map(uye => uye.id + " | " + uye.displayName).join('\n')}`, { split: true, code: "xl" });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol-üyeleri'],
  permLevel: 0
};

exports.help = { 
  name: 'rol-uyeleri', 
  description: 'rol-uyeleri',
  usage: 'rol-uyeleri',
  kategori: 'yetkili'
};