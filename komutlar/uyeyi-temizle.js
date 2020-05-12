const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`<a:canuyari:603528216275058718> Bu komutu kullanabilmen için MESAJLARI_YÖNET iznine sahip olmalısın!`);
  let uye = message.mentions.members.first();
  if (!uye || !args[1] || isNaN(args[1]) || Number(args[1]) < 1 || Number(args[1]) > 99) return message.reply(`<a:canuyari:603528216275058718> Komutu doğru kullanmalısın!\n${this.help.usage}`);
  let mesajlar = await message.channel.fetchMessages();
  message.channel.bulkDelete(mesajlar.filter(msj => msj.author.id === uye.id).array().slice(0, Number(args[1]))).then(() => message.reply(`<a:discord:601758582580445220> Belirtilen üyenin mesajları başarıyla silindi ! <a:cantick:623582918203408384>`).then(uyari => uyari.delete(5000))).catch(hata => message.channel.send("<a:canuyari:603528216275058718> Bir hatayla karşılaşıldı!"));
  message.delete(5000);
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");  

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['üye-temizle'],
  permLevel: 0
};

exports.help = { 
  name: 'temizle-üye', 
  description: 'Belirtilen üyenin belirtilen sayıda mesajlarını temizler.',
  usage: '-temizle-üye @etiket <sayı> (1-100)',
  kategori: 'kullanıcı'
};