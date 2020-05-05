const Discord = require('discord.js');

const random_fuze = [
  "https://i.pinimg.com/originals/23/c1/b9/23c1b9ae331f780b4165bb670bae88d0.gif",
  "https://66.media.tumblr.com/a0e4c5c7c741c01edb7ec31a3bf13847/tumblr_ou24ecJf271wnmmz0o1_250.gif",
  "https://66.media.tumblr.com/4bd47f6bb71d5385b7db5b558da33be6/tumblr_o4uxuvwSCb1r6aunuo1_400.gif",
  "https://em.wattpad.com/17b64dbb1c384b2d729c8882e60932f5cfcb2fc4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f707558366d463269597a364e35413d3d2d31312e313439353964303436303662613063633234313035333235313832392e676966?s=fit&w=720&h=720",
  "https://cf.kizlarsoruyor.com/q4408118/0c42cab5-6394-4180-a176-daca8da6ceeb.gif",
  "https://i2.wp.com/www.netdunyam.net/wp-content/uploads/tumblr_m1s6c1FSFH1qbyehfo1_5001.gif?resize=480%2C220",
  "http://25.media.tumblr.com/2c90ff69131765c309ceba07bae26ef0/tumblr_n0mbfqjQkO1seqamso1_500.gif",
 ]
exports.run = (client, message, args) => {
	let kisi = args.slice(0).join(' ');
	if (kisi.length < 1) return message.reply('**Kime Sarılacağını Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setImage(random_fuze[Math.floor(Math.random() * random_fuze.length)])
    .setDescription(`** ${kisi} Adlı Kişi [** ` + message.author.username + '**] Nin Sevgisine Boğuldu !**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'İstediğiniz Kişiye Sarılırsınız.',
  usage: 'sarıl'
};
