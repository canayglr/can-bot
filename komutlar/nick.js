const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesaj = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: HATA :warning:', 'Bu komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesaj); }
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu kullanmak için **Kullanıcı Adını Yönet** yetkisine sahip olmalısın.').setColor(10038562));
  let guild = message.guild
  let nick = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (!nick) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Lütfen değiştireceğiniz ismi yazınız.\nÖrnek: ` + ayarlar.prefix + `nick **@Kullanıcı <isim>**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
  let userr = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
  if (message.mentions.users.size < 1) return message.reply('**KULLANIM :** *-rol <@isim> <erkek,kız>*');
  if (!userr) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Lütfen bir kullanıcı ismi gir.\nÖrnek: ` + ayarlar.prefix + `nick **@Kullanıcı <isim>**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
  userr.setNickname(nick)
  message.delete();
  message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${user} isimli üyenin adı başarıyla \`${nick}\` olarak değiştirildi! <a:cantick:623582918203408384>`).setColor('RANDOM'));
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["isim"],
  permLevel: 0
};

exports.help = {
  name: 'nick',
  description: 'İstediğiniz kişiyi cezalandırır.',
  usage: 'nick'
};
