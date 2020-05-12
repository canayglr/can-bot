const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komudu kullanmak için **Yönetici** yetkisine sahip olmalısın.').setColor(10038562));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Lütfen bir kullanıcı ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
    let role = message.mentions.roles.first()
    if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Lütfen bir rol ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Bu rolü bulamıyorum.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());

    if (rMember.roles.has(aRole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu kullanıcı zaten bu rolde.').setColor(10038562));
    await (rMember.addRole(aRole.id))
	message.delete();
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${rMember} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi! <a:cantick:623582918203408384>`).setColor('RANDOM'));
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver', 'rolekle'],
  permLevel: "0"
};

exports.help = {
  name: "rolver",
  description: "Kişilere Rol Yetkisi Verir",
  usage: "rolver <mesaj>"
};
