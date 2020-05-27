const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`<a:canuyari:603528216275058718> Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`);
  if(!args[0]) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Rol verilecek kullanıcıların, adında bulunması gereken **tagı giriniz !** \n **Doğru Kullanım :** \n \`${ayarlar.prefix}tag-rol [tag] @rol/rol id\``).setColor('RANDOM'));

  //if(!args[0]) return message.reply(`<a:canuyari:603528216275058718> Rol verilecek kullanıcıların, adında bulunması gereken tagı giriniz! \n \`${ayarlar.prefix}tag-engel [tag] @rol/rol id\``)
  let role = message.mentions.roles.first() || message.guild.roles.get(args[1])
  if(!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`<a:canuyari:603528216275058718> Kullanıcı adında tag bulunan kullanıcılara verilecek **rolü belirtiniz !** \n **Doğru Kullanım :** \n \`${ayarlar.prefix}tag-rol [tag] @rol/rol id\``).setColor('RANDOM'));

  //if(!role) return message.reply(`:x: )
  if(args[0] === "ekle") {
  try {
    let rolveriliyor = await message.channel.send(`<a:canuyari:603528216275058718> Kullanıcı adında tag olup, belirtilen role sahip olmayan kişi sayısı: ${message.guild.members.filter(x => (x.user.username).includes(args[1]) && !x.roles.has(role.id)).size} \nRolleri veriliyor... 
<a:canload:601758614058827777>`);
    await message.guild.members.filter(x => (x.user.username).includes(args[1]) && !x.roles.has(role.id)).forEach(a => a.addRole(role.id));
    await rolveriliyor.edit(`<a:canuyari:603528216275058718> Belirtilen taga sahip kullanıcılara **(${message.guild.members.filter(x => (x.user.username).includes(args[1]) && !x.roles.has(role.id)).size} kişiye)**  \`${message.guild.roles.get(role.id).name}\`  rolü başarıyla eklendi ! <a:cantick:623582918203408384>`);
  } catch(err) { 
      message.reply("<a:canx:616921650490900501> İşlem başarısız. Yetkilerimi kontrol ediniz.")
  }
  } else {
try {
    let rolveriliyor = await message.channel.send(`<a:canuyari:603528216275058718> Kullanıcı adında tag olup, belirtilen role sahip olmayan kişi sayısı: ${message.guild.members.filter(x => (x.user.username).includes(args[0]) && !x.roles.has(role.id)).size} \nRolleri veriliyor... 
<a:canload:601758614058827777>`);
    await message.guild.members.filter(x => (x.user.username).includes(args[0]) && !x.roles.has(role.id)).forEach(a => a.setRoles([role.id]));
    await rolveriliyor.edit(`<a:canuyari:603528216275058718> Belirtilen taga sahip kullanıcılara **(${message.guild.members.filter(x => (x.user.username).includes(args[0]) && !x.roles.has(role.id)).size} kişiye)**  \`${message.guild.roles.get(role.id).name}\`  rolünü başarıyla verdim ! <a:cantick:623582918203408384>`);
  } catch(err) { 
      message.reply("<a:canx:616921650490900501> İşlem başarısız. Yetkilerimi kontrol ediniz.")
  }
  }
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");  
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tag-yetki','tagyetki','tagrol'],
  permLevel: 0
};

exports.help = {
  name: 'tag-rol',
  description: 'Belirtilen taga sahip kullanıcılara belirtilen rolü verir.',
  usage: 'tag-yetki [tag] [rol]'
};