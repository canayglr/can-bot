const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let rol = message.mentions.roles.first() || message.guild.roles.find(rol => rol.name === args.join(' ')) || message.guild.roles.get(args[0]);
  if (!rol) return message.reply('<a:canuyari:603528216275058718> Lütfen En Alt Yetkiyi Belirtiniz !');
  let enAltYetkiliRolü = message.guild.roles.get(rol.id); // en alttaki rol id
  let yetkililer = message.guild.members.filter(uye => uye.highestRole.position >= enAltYetkiliRolü.position);
  let embed = new Discord.RichEmbed().setTitle("<:nokta:708101762904621078> " + message.guild.name + " Yetkili Sayımı <:nokta:708101762904621078>").setTimestamp().setFooter(message.author.tag + " tarafından istendi!")
  .setDescription(`<a:discord:601758582580445220> Toplam Yetkili Sayısı: ${yetkililer.size}\n<a:online:670020301731659796> Aktif Yetkili Sayısı: ${yetkililer.filter(uye => uye.presence.status !== "offline").size}\n<a:hoparlor:627885351200882698> Sesli Kanalda Bulunanlar: ${yetkililer.filter(uye => uye.voiceChannel).size}`)
  // Online Üye Sayısı: ${message.guild.members.filter(uye => uye.presence.status !== "offline").size}
  message.channel.send(embed);
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");  
};

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yetkilisay', 
  description: 'Yetkilileri sayar.', 
  usage: 'yetkilisay',
  kategori: 'yetkili'
};