const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`uyar` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('Bu Komudu Kullanmak İçin ``BAN_MEMBERS`` Yetkiniz Olmalıdır !');
  if (!modlog) return message.reply('`mod-log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('**KULLANIM :** *-uyar <@isim> <sebep>*');
  if (message.mentions.users.size < 1) return message.reply('**KULLANIM :** *-uyar <@isim> <sebep>*').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Eylem:', 'Uyarı verme')
  .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
  .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Sebep', reason);
  message.delete();
  message.channel.send('``'+ user.tag + '`` Adlı Kullanıcıya Bir **Uyarı** Verildi. :name_badge: 𝓢𝓔𝓑𝓔𝓟: `' + reason + '`')
  return guild.channels.get(modlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
};

//message.edit(`${user.username} Adlı Kullanıcıya Uyarı Verildi **Sebebi**` , reason);
