const Discord = require('discord.js');

const random_fuze = [
  "https://thumbs.gfycat.com/BiodegradableEverlastingIchidna-size_restricted.gif",
  "https://media3.giphy.com/media/1xpCUwMqonu99mJrcM/giphy.gif"
 ]
exports.run = (client, message, args) => {
	let kisi = args.slice(0).join(' ');
	if (kisi.length < 1) return message.reply('<a:canuyari:603528216275058718> **Molotofu Kendine Atmıcağına Göre Birini Etiketle Dostum !**');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setImage(random_fuze[Math.floor(Math.random() * random_fuze.length)])
    .setDescription(`** ${kisi} Yaramazlık Yaptığı İçin [** ` + message.author.username + '**] Tarafından <:molotof:608937279733497866> Yedi , İyimisin Bro ?**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'molotof',
  description: 'İstediğiniz Kişiye Füze Atarsınız.',
  usage: 'molotof'
};
