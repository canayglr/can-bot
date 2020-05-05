const Discord = require('discord.js');

const random_fuze = [
  "https://i.kinja-img.com/gawker-media/image/upload/s--knzWuZ35--/c_scale,fl_progressive,q_80,w_800/1430479036648140099.gif",
  "http://3.bp.blogspot.com/-Zbrl4rXbY5s/U9knm6XoHiI/AAAAAAAAC8g/qwhbe-tgbcc/s1600/0042.gif",
  "http://www.institutodeestrategia.com/asset/zoomcrop%252C120%252C70%252C0%252C0/media/institutodeestrategia/images/2017/07/31/2017073116443657426.gif",
  "https://www.gifmania.com.tr/Hareketli-Gifler-Nesneler/Gif-Resimleri-Silahlar/Animasyonlar-Roketatarlar/Roketatarlar-88219.gif",
  "https://media.giphy.com/media/13iipJ7fFNq8TK/giphy.gif",
  "https://www.neoldu.com/d/other/roketatar.gif",
  "http://cdn.webtekno.com/custom/images/1(3).gif",
 ]
exports.run = (client, message, args) => {
	let kisi = args.slice(0).join(' ');
	if (kisi.length < 1) return message.reply('**Füzeyi Kendine Atmıcan Demi ? , Kime Füze Atcağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setImage(random_fuze[Math.floor(Math.random() * random_fuze.length)])
    .setDescription(`** ${kisi} Öyle Ölmem Füze At Dedi Ve [** ` + message.author.username + '**] Tarafından :rocket: Yedi , Acıtmış Olmalı**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'füze',
  description: 'İstediğiniz Kişiye Füze Atarsınız.',
  usage: 'füze'
};
