const Discord = require('discord.js');
const ms = require('ms');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  let süre = args[0];
  let zaman = args[1];
  if(!süre || !zaman || zaman.includes('hafta') || zaman.includes('ay') || zaman !== "saniye" && zaman !== "sn" && zaman !== "dakika" && zaman !== "dk" && zaman !== "saat" && zaman !== "sa" && zaman !== "gün" && zaman !== "g" && zaman !== "yıl" && zaman !== "y") return message.reply(`Süre belirtmelisin! (Süre olarak ay veya hafta yazılamaz) **Örn:** \`${prefix}${this.help.name} 10 gün\``);
  let üyeler = message.guild.members.filter(üye => !üye.user.bot && new Date().getTime() - üye.user.createdAt.getTime() < ms((süre+zaman).replace('saniye', 's').replace('sn', 's').replace('dakika', 'm').replace('dk', 'm').replace('saat', 'h').replace('sa', 'h').replace('gün', 'd').replace('g', 'd').replace('yıl', 'y')));
  message.channel.send(`╔══════════════════════════════════════════════════════════╗ \n\n${üyeler.map(can =>"๑ " + can.user.id + " → " + can.user.username + "#" + can.user.discriminator).join('\n')} \n\n► Hesabının açılış tarihi "${süre} ${zaman}" süresinden az olan "${üyeler.size}" adet üye bulunuyor! \n\n╚══════════════════════════════════════════════════════════╝`, {code: "xl", split: true})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['hesap-taraması', 'hesap-tarama', 'hesaptara'],
  permLevel: 0
};

exports.help = {
  name: 'hesap-tara',
  description: 'Hesabının açılış süresi belirtilen zamandan az olan üyeleri listeler.',
  usage: 'hesap-tara <x saniye/dakika/saat/gün/yıl>',
  kategori: 'kullanıcı'
};