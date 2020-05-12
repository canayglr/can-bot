const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const moment = require("moment")
var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
    const superagent = require('superagent')
    if(!args[0]) return message.channel.send(`<a:canuyari:603528216275058718> Bir şehir girmelisin.`)
    let {body} = await superagent 
    .get(`https://namazapi.glitch.me/namaz?sehir=${args[0]}`);
    if(!{body}) return message.channel.send(`<a:canuyari:603528216275058718> Bir Hata Oluştu, Lütfen Biraz Sonra Tekrar Dene !`)
    if(body.hata) return message.channel.send(`<a:canuyari:603528216275058718> Lütfen Geçerli Bir Şehir Gir!`)
    let saat = moment().utc().add(3, "hour").format("HH:mm") 
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${args[0]} İftar Bilgileri!`, client.user.avatarURL)
    .setThumbnail("https://lh3.googleusercontent.com/proxy/OmK_ZpQaSg5Va3vrsAqCwM3ybLOBOX_aMjk1jlB3XpuCarIaACcRmZEmJWKjF0KkZicOytlFRB7Kxg9Mj51cL2G9GGu7ttDvXGZ8JSa7wZ61Yk_1fFuKujc1uBrLUk7oDAc_HsNp5PqPUw")
    .addField("**Tarih:**",`\`${body.tarih} ${saat}\``)
    .addField(`🕌 ${args[0]} **İmsak Ezan vakti:**`, `\`${body.İmsak}\``, true)
    .addField(`🕌 ${args[0]} **Sabah Ezan vakti:**`, `\`${body.Güneş}\``, true)
    .addField(`🕌 ${args[0]} **Öğle Ezan vakti:**`, `\`${body.Öğle}\``, true)
    .addField(`🕌 ${args[0]} **İkindi Ezan vakti:**`, `\`${body.İkindi}\``, true)
    .addField(`🕌 ${args[0]} **Akşam Ezan vakti:**`, `\`${body.Akşam}\``, true)
    .addField(`🕌 ${args[0]} **Yatsı Ezan vakti:**`, `\`${body.Yatsı}\``, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'namaz'
};