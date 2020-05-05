const Discord = require('discord.js');

const random_fuze = [
  "https://media1.tenor.com/images/70a878e089fb66f7e9f6e670def1de40/tenor.gif?itemid=7848004",
  "https://media.tenor.com/images/0caa346d9ba5b9b7b9297d688a4fb4a1/tenor.gif",
  "https://media1.tenor.com/images/3509c0aa9fa02f00ff064fb43320a9e9/tenor.gif?itemid=5318026",
  "https://img-s1.onedio.com/id-548c0fac4a06f0ae2f946e64/rev-0/w-500/s-83a8ba6ed153e56fc846d279b28ba5afafde1469.gif",
  "https://media1.tenor.com/images/709329bf4b7521b2c4817e51cfb2f1a0/tenor.gif?itemid=7510724",
  "https://media1.tenor.com/images/9ee43bd31461f47e5aee9489d395a007/tenor.gif?itemid=9806984"
 ]
exports.run = (client, message, args) => {
	let kisi = args.slice(0).join(' ');
	if (kisi.length < 1) return message.reply('<a:canuyari:603528216275058718> **Kendini Boğmican Dimi ? , Kimi Boğacağını Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setImage(random_fuze[Math.floor(Math.random() * random_fuze.length)])
    .setDescription(`** ${kisi} Adlı Garip [** ` + message.author.username + '**] Tarafından Hunharca Boğduruldu**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['boğazla'],
  permLevel: 0
};

exports.help = {
  name: 'boğ',
  description: 'İstediğiniz Kişiyi Boğarsınız.',
  usage: 'boğ'
};
