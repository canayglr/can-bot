const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Lütfen bir kullanıcı ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolal **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
    let role = message.mentions.roles.first()

    if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Lütfen bir rol ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolal **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Bu rolü bulamıyorum.\nÖrnek: ` + ayarlar.prefix + `rolal **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());

    if (!rMember.roles.has(aRole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu kullanıcıda zaten bu yetki yok.').setColor(10038562));
    await (rMember.removeRole(aRole.id))
	message.delete();
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${rMember} isimli üyenin \`${role.name}\` isimli yetkisi başarıyla alındı! <a:canx:616921650490900501>`).setColor('RANDOM'));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolsil'],
  permLevel: "0"
};

exports.help = {
  name: "rolal",
  description: "Kişilere Rol Yetkisi Verir",
  usage: "rolal <mesaj>"
};
