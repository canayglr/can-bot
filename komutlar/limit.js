const Discord = require("discord.js");
exports.run = async (client, message, args) => {
 
  let kanal = args[0];
  if (!kanal) //Dcs Ekibi
    return message.reply("Bir Ses Kanal ID Gir <a:canuyari:603528216275058718> ").catch(console.error);

  let sayı = args[1];
  if (!sayı) 
    return message.reply("Oda Limiti Kaç Olacak Yazmalısın <a:canuyari:603528216275058718> ").catch(console.error);
  if (sayı > 90) 
    return message.reply("Oda Limiti En Fazla ``90` Olabilir <a:canuyari:603528216275058718> ").catch(console.error);
  let log = message.guild.channels.get(kanal);
  if (!log)
    return message.reply("Bu ID Ye Ait Kanal Bulunamadı <a:canuyari:603528216275058718> ").catch(console.error);

  log.setUserLimit(sayı);
  message.channel.send(`<a:discord:601758582580445220> ``<#${kanal}>`` İsimli Ses Odasının Limiti __**${sayı}**__ Oldu ! <a:cantick:623582918203408384>`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "limit",
  description: "Belirlenen Ses Kanalının Kişi Limitini Ayarlar!", //Dcs Ekibi
  usage: "limit <kanal-id> <oda-limit>"
};