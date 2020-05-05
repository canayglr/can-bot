const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
    return message.author.send('`Temizle` Komutu Sadece Sunucularda Kullanılabilir !');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply('<a:canuyari:603528216275058718> Bu Komudu Kullanabilmem İçin ``Mesajları Yönet`` Yetkim Olmalıdır !');
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('<a:canuyari:603528216275058718> Bu Komudu Kullanmak İçin ``Mesajları Yönet`` Yetkiniz Olmalıdır !');
  if (!mesajsayisi) return message.channel.send('<a:canx:616921650490900501> **HATA** : Silinecek Mesaj Sayısı Belirtilmedi')
  if (mesajsayisi > 100) return message.channel.send("<a:canx:616921650490900501> **HATA** : Silinecek Mesaj Sayısı 100'ü Geçmemelidir");
  message.channel.bulkDelete(mesajsayisi + 1).then((member) => {
            message.channel.send('``' + mesajsayisi + '`` Adet Mesaj **[** <@' + message.author.id + '> **]** Tarafından Temizlendi !').then(message => message.delete(5000));
        }).catch(() => {
            message.channel.send("<a:canx:616921650490900501> **Bir Hata Oluştu !**");
        });
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen Miktar Mesajı Siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
