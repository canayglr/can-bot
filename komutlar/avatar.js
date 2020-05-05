const Discord = require('discord.js');


exports.run = function(client, message) {
    if (!message.guild) return message.author.send('<a:canuyari:603528216275058718> `Bu Komut` komutu sadece sunucularda kullanılabilir.');
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('<a:canuyari:603528216275058718> Bu Komudu Kullanmak İçin ``Mesajları Yönet`` Yetkiniz Olmalıdır !');
    var user = message.mentions.users.first();
    if(!user || message.author.id === user.id) {
    const embed = new Discord.RichEmbed()
        .setAuthor('[ '+ message.author.tag + ' ] Senin Profil Fotoğrafın !')
        .setImage(message.author.avatarURL)
        .setColor("RANDOM")
        .setFooter("Başkasının Avatarını Görmek İstiyorsan -avatar <kullanıcı>")
    message.channel.send(embed);
    } else {
    const embed1 = new Discord.RichEmbed()
        .setAuthor('[ ' + user.username + ' ] Adlı Kişinin Profil Fotoğrafı !')
        .setImage(user.avatarURL)
        .setFooter(message.author.tag + ' Tarafından İstendi !')
        .setColor("RANDOM")

    message.channel.send(embed1)};
};

exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['pp', 'photo'],
  permLevel: 0
};

exports.help = {
  name: 'avatar', 
  description: 'Avatarınızı gösterir',
  usage: 'avatar'
};
/*const Discord = require('discord.js');

exports.run = (client, message, args) => {
	if (!message.guild) {
return message.author.send('<a:canuyari:603528216275058718> `Bu Komut` komutu sadece sunucularda kullanılabilir.');
}
	//let member = message.mentions.members.first()
	var user = message.mentions.users.first();
	if(!user)return message.channel.send({embed: {
    color: Math.floor(Math.random() * (0xFFFFFF + 1)),
	title: "**Senin** Avatarın",
    image: {
      url: message.author.avatarURL
    }
  }});
  else{
    message.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
	  title: "**" + user.username + "** Adlı Kişinin Avatarı ",
      image: {
        url: user.avatarURL
      }}});
  }
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 2
};

exports.help = {
  name: 'avatar',
  description: 'İstediğiniz kişinin avatarını görürsünüz',
  usage: 'avatar [@kişi]'
};*/