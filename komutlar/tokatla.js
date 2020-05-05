const Discord = require('discord.js');

const random_fuze = [
  "https://media1.tenor.com/images/19aa97d3f7b751c3551f3a2a9b03f2dd/tenor.gif?itemid=12695676",
  "https://media1.tenor.com/images/e5b55654990f07bdf88655e9d1f7466b/tenor.gif?itemid=12695616",
  "https://media1.tenor.com/images/b4e6134df4e27207dfb68207b5829082/tenor.gif?itemid=12695584",
  "https://4.bp.blogspot.com/-WfzGkNhjFIE/Vi-vwoWklXI/AAAAAAAAPCc/HXSnXtEMGs0/s1600/kemal_sunal_sener_sen_tokat.gif",
  "https://66.media.tumblr.com/f58e7881c923f000e7bbfb285f3ef0d5/tumblr_mngbtpxG6n1s2cwz0o1_250.gif",
  "https://galeri13.uludagsozluk.com/611/tokat-atmak-ama-corum-atamamak_1462057.gif"
 ]
exports.run = (client, message, args) => {
	let kisi = args.slice(0).join(' ');
	if (kisi.length < 1) return message.reply('**Tokatı Kendine Atmıcan Demi ? , Kime Tokat Atcağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setImage(random_fuze[Math.floor(Math.random() * random_fuze.length)])
    .setDescription(`** ${kisi} Vur Bana Dedi Ve [** ` + message.author.username + '**] Tarafından :wave: Yedi , İyimisin Kardeşim ?**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tokat'],
  permLevel: 0
};

exports.help = {
  name: 'tokatla',
  description: 'İstediğiniz Kişiye Füze Atarsınız.',
  usage: 'tokatla'
};
