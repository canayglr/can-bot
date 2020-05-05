const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {
  if (message.guild.id === '633677286893420554') {
  if (!message.guild) {
  const ozelmesaj = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: HATA :warning:', 'Bu komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesaj); }
  if (!message.member.roles.has("643043459825139722"))  return message.reply('Bu Komudu Kullanmak İçin <@&643043459825139722> Yetkiniz Olmalıdır !');
  let guild = message.guild
  let yas = args.slice(2).join(' ');
  let isim = args[1];
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('id', '643046799006761008');
  if (!isim) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\n**Örnek: ` + ayarlar.prefix + `isim @kullanıcı isim yaş**`).setColor("RANDOM").setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
  if (yas.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir yaş belirt .\n**Örnek: ` + ayarlar.prefix + `isim @kullanıcı isim yaş**`).setColor("RANDOM").setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
  if (!modlog) return message.reply('`kayit-log` kanalını bulamıyorum.');
  let userr = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
	   userr.setNickname("◐ " + isim + " | " + yas).then((member) => {
            message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**<a:elmas:605083521199112199> İsim İşlemi Başarıyla Tamamlandı <a:cantik:601758596937809941>**\n<a:elmas:605083521199112199> **Kayıt Edilen:** ${user.username}#${user.discriminator}`).setColor("RANDOM").setAuthor(`${message.author.username} tarafından yapıldı.`, message.author.avatarURL).setTimestamp());
        }).catch(() => {
             // Failmessage
            message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**<a:elmas:605083521199112199> Bir Hata Oluştu <a:canx:616921650490900501>**\n<a:elmas:605083521199112199> Lütfen Tekrar Deneyiniz !`).setColor("RANDOM").setAuthor(`${message.author.username} tarafından yapıldı.`, message.author.avatarURL).setTimestamp());
		});
	  message.delete();
   const ism = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setTimestamp()
     .addField('KAYIT SİSTEMİ','CAN BOT')
     .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
     .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
     .addField('İsim Değiştirildi !', user);
	  return guild.channels.get(modlog.id).sendEmbed(ism);
	}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick"],
  permLevel: 0
};

exports.help = {
  name: 'isim',
  description: 'İstediğiniz kişiyi cezalandırır.',
  usage: 'isim'
};
