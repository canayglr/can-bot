const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const ms = require("ms");


exports.run = async(client, message, args) => {
  let wencylxrd = message.mentions.users.first();
  let wencytime = args.slice(1).join(' ')
  .replace('gün'.toLowerCase(), 'd')
  .replace('saat'.toLowerCase(), 'h')
  .replace('dakika'.toLowerCase(), 'm')
  .replace('saniye'.toLowerCase(), 's');
  
  if(args[0] === "toplu" || args[0] === "tüm") {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("<a:canuyari:603528216275058718> Bu özelliği kullanabilmek için `Yönetici` iznine sahip olmalısın !");
    if(!message.member.voiceChannel) return message.reply('<a:canuyari:603528216275058718> Bir ses kanalında değilsin !')
    if(wencytime) {
      message.member.voiceChannel.members.forEach(x => x.setMute(true));
      message.reply('<a:canuyari:603528216275058718> Belirtilen süre kadar kanalındaki üyeler susturuldu ! <a:cantick:623582918203408384>')
      setTimeout(function(){
        message.member.voiceChannel.members.forEach(x => x.setMute(false));
        message.channel.send(`<a:discord:601758582580445220> ${message.member.displayName} adlı kişi tarafından atılan toplu susturma, süresi dolduğu için kaldırıldı!`);
      }, ms(wencytime));
    } else {
      message.member.voiceChannel.members.forEach(x => x.setMute(true));
      message.reply('<a:discord:601758582580445220> Kanalındaki üyeler başarıyla susturuldu ! <a:cantick:623582918203408384>')
    }
    return
  }
  
  if(args[0] === "toplukaldır" || args[0] === "tk") {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("<a:canuyari:603528216275058718> Bu özelliği kullanabilmek için `Yönetici` iznine sahip olmalısın !");
    if(!message.member.voiceChannel) return message.reply('<a:canuyari:603528216275058718> Bir ses kanalında değilsin !')
    message.member.voiceChannel.members.forEach(x => x.setMute(false));
    message.reply('<a:discord:601758582580445220> Bulunduğun kanaldaki tüm kullanıcıların susturulmalarını kaldırdım ! <a:cantick:623582918203408384>')
    return
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanalmute","toplu-mute"],
  permLevel: 0
};

exports.help = {
  name: "toplumute",
  description: "Belirtilen ses kanalını/ses kanalındaki kullanıcıyı susturur.",
  usage: "kanalmute @kullanıcı/tüm <süre>",
  kategori: "kanalmute"
};  