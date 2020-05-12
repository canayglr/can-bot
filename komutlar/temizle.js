const Discord = require('discord.js');

exports.run = async(yashinu, message, args) => {
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply('<a:canuyari:603528216275058718> Bu Komudu Kullanabilmem İçin ``Mesajları Yönet`` Yetkim Olmalıdır !');
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('<a:canuyari:603528216275058718> Bu Komudu Kullanmak İçin ``Mesajları Yönet`` Yetkiniz Olmalıdır !');
  if (!args[0] || isNaN(args[0])) return message.reply(`<a:canx:616921650490900501> Temizlenecek mesaj miktarını belirtmelisin !`);
  await message.delete();
  let sayi = Number(args[0]);
  let silinen = 0;
  for (var i = 0; i < (Math.floor(sayi/100)); i++) {
    await message.channel.bulkDelete(100).then(r => silinen+=r.size);
    sayi = sayi-100;
  };
  if (sayi > 0) await message.channel.bulkDelete(sayi).then(r => silinen+=r.size);
  message.channel.sendEmbed(new Discord.RichEmbed().setDescription('<a:elmas:605083521199112199> ``' + silinen + '`` Adet Mesaj **[** <@' + message.author.id + '> **]** Tarafından Temizlendi !').setColor("RANDOM").setAuthor(`${message.author.username} tarafından yapıldı.`, message.author.avatarURL).setThumbnail("https://media1.tenor.com/images/1d57a559c844c62290272bc8213afa7a/tenor.gif?itemid=6177877").setTimestamp()).then(message => message.delete(5000));
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle", "sil"],
  permLevel: 0
};

exports.help = { 
  name: 'temizle', 
  description: 'Belirtilen miktarda mesajı temizler. (Sınırsız)',
  usage: 'temizle <miktar>',
  kategori: 'kullanıcı'
};