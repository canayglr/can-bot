const Discord = require('discord.js');






exports.run = (client, message, args) => {
	var idsor = message.mentions.users.first();
	if(!idsor) {
		var ids = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setThumbnail(message.author.avatarURL)
			.addField("Senin ID", message.author.id)
			.setColor(0x000000)
			.setFooter("Başkasının ID Sini Öğrenmek İçin | -id <@kişi> |")
		message.channel.send(ids);

  }else{
    var idsr = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
			.addField("Kullanıcı:", idsor.username)
			.setThumbnail(idsor.avatarURL)
			.addField("ID", idsor.id)
			.setColor(0x000000)
			.setFooter("Kendi ID Ni Öğrenmek İçin | -id |")
		message.channel.send(idsr);
}




};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sorgu"],
  permLevel: 0
};

exports.help = {
  name: 'id',
  description: "Bir Kullanıcının ID Sini Bulmaya Yarar",
  usage: 'id veya id <@kişi>'
};
