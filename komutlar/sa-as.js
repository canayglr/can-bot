const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if (!message.guild) {
  const ozelmesaj = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: HATA :warning:', 'Bu komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesaj); }
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('<a:canuyari:603528216275058718> Bu Komudu Kullanmak İçin ``Yönetici`` Yetkiniz Olmalıdır !');
  let aslm = await db.fetch(`slm_${message.guild.id}`)
  let guild = message.guild
  let cins = args[0];
  let user = message.mentions.users.first();
  let userr = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
  if (!cins) return message.reply('**KULLANIM :** -sa-as kapat/aç').catch(console.error);
  message.delete();
	if (cins === "kapat") {
    if ((aslm === 'off') || (aslm !== null)){
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**Sistem Zaten Kapalı <a:canx:616921650490900501>**\n<a:elmas:605083521199112199> Aktifleştirebilmek İçin \`-sa-as aç\` Yazmanız Yeterlidir !`).setColor("RANDOM").setAuthor(`${message.author.username} tarafından yapıldı.`, message.author.avatarURL).setTimestamp());
    } else {
    db.set(`slm_${message.guild.id}`, 'off')
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**Kapatma İşlemi Başarıyla Tamamlandı <a:cantik:601758596937809941>**\n<a:elmas:605083521199112199> Tekrar Aktifleştirebilmek İçin \`-sa-as aç\` Yazmanız Yeterlidir !`).setColor("RANDOM").setAuthor(`${message.author.username} tarafından yapıldı.`, message.author.avatarURL).setTimestamp());

	};
} else if (cins === 'aç')
  if ((aslm === 'on') || (aslm !== null)){
        message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**Sistem Zaten Açık <a:canx:616921650490900501>**\n<a:elmas:605083521199112199> Kapatmak İçin \`-sa-as kapat\` Yazmanız Yeterlidir !`).setColor("RANDOM").setAuthor(`${message.author.username} tarafından yapıldı.`, message.author.avatarURL).setTimestamp());
   } else {
    db.set(`slm_${message.guild.id}`, 'on')
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**Açma İşlemi Başarıyla Tamamlandı <a:cantik:601758596937809941>**\n<a:elmas:605083521199112199> Tekrar Kapatmak İçin \`-sa-as kapat\` Yazmanız Yeterlidir !`).setColor("RANDOM").setAuthor(`${message.author.username} tarafından yapıldı.`, message.author.avatarURL).setTimestamp());
}
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};        
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'İstediğiniz kişiyi cezalandırır.',
  usage: 'rol'
};
