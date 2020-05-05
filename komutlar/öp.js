const Discord = require('discord.js');

const random_op = [
  "https://media1.tenor.com/images/da618f7954cc715c73f397f2034c0f21/tenor.gif?itemid=9762241",
  "https://img-s1.onedio.com/id-58402b24e7493d470ea93c34/rev-0/w-500/s-3d18667926a087d9f8cf545f2e0bbaa7fcede5f2.gif",
  "https://66.media.tumblr.com/43eb9277499939d50b7910a9734cff34/tumblr_inline_oc2xf5TDTi1upv9lu_500.gif",
  "https://img-s2.onedio.com/id-5566dc02c3aa63ba2c3ad295/rev-0/w-500/s-71123f4f40b8b932684abcbbafa1bcb2bfb7c5f8.gif",
  "https://img-s2.onedio.com/id-58405517616ff9510e5e3101/rev-0/w-500/s-994dca7f82a3d19c72c418a6a85f563bbeb2a7e5.gif",
  "https://tenor.com/view/kiss-couple-love-passionate-relationship-gif-5418133",
  "https://tenor.com/view/kiss-scorpion-paige-walter-gif-10812924",
  "https://tenor.com/view/couple-kiss-love-hold-passionate-gif-5052769",
 ]
exports.run = (client, message, args) => {
	let kisi = args.slice(0).join(' ');
	if (kisi.length < 1) return message.reply('**💋 Kimi Öpeceğini Yazmalısın 💋**');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setImage(random_op[Math.floor(Math.random() * random_op.length)])
    .setDescription(`**💋 ${kisi} 💋 Adlı Kişi [** ` + message.author.username + '**] Tarafından Öpücüğe Boğuldu !**')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'İstediğiniz Kişiyi Öpersiniz .',
  usage: 'öp'
};
