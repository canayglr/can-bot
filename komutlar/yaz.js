const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('<a:canuyari:603528216275058718> Yazmam için herhangi bir şey yazmalısın !');
  message.delete();
  if(mesaj.includes("everyone")) {
     message.delete();
       message.reply(`Bi Sen Akıllısın Zaten Kardeşim Şuan Attım Bak <a:hoop:626102473408380938>`).then(message => message.delete(3000));
     } else
     if(mesaj.includes("here")) {
     message.delete();
       message.reply(`Bi Sen Akıllısın Zaten Kardeşim Şuan Attım Bak <a:hoop:626102473408380938>`).then(message => message.delete(3000));
     } else
       if(mesaj.includes("discord.gg")) {
     message.delete();
       message.reply(`Bi Sen Akıllısın Zaten Kardeşim Reklam Yapamazsın <a:hoop:626102473408380938>`).then(message => message.delete(3000));
       } else
  if (message.author.id === "384296034521579520") {
			message.channel.send(mesaj);
		} else {
	const msj = new Discord.RichEmbed()
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL)
  .setTitle(mesaj);
  message.delete();
  message.channel.send(msj)};

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
