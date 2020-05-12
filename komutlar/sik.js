const Discord = require('discord.js');
exports.run = (client, message, args) => {
	let kisi = message.mentions.users.first();
	if (!kisi) return message.reply('**Kimi Şey Edeceksin Etiketle Dostum !**');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/emojis/601758157831667732.gif')
    .setDescription(`**<a:canuyari:603528216275058718> ${message.author.username} Amacın Ne Bilmiyorum Ama [** ` + kisi + '**] Kıçını Kolla Dostum !**')
     message.channel.sendEmbed(embed);
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sik',
  description: 'İstediğiniz Kişiyi Silkersiniz .',
  usage: 'sik'
};
