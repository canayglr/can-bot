const Discord = require('discord.js');

const random_fuze = [
  "https://i.makeagif.com/media/11-28-2015/I-oD2O.gif",
  "https://thumbs.gfycat.com/ConfusedShortAmericanbittern-size_restricted.gif",
  "https://galeri7.uludagsozluk.com/237/turklerin-ucarak-kafa-atma-gelenegi_400167.gif",
  "https://listelist.com/wp-content/uploads/2015/01/duvara-kafa-atma-gif.gif",
 ]
exports.run = (client, message, args) => {
	let kisi = args.slice(0).join(' ');
	if (kisi.length < 1) return message.reply('**Kendine Kafamı Atıcaksın ? , Kime Kafa Atcağını Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setImage(random_fuze[Math.floor(Math.random() * random_fuze.length)])
    .setDescription(`** ${kisi} Adlı Kullanıcı [** ` + message.author.username + '**] Tarafından HeadShot Yedi , Acıtmış Olmalı**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kafaat',
  description: 'İstediğiniz Kişiye Füze Atarsınız.',
  usage: 'kafaat'
};
