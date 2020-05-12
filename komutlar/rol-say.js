const Discord = require('discord.js');
const Yashinu = require("quick.db");

exports.run = async (client, message, args) => {
const guild = message.guild
  // Pozisyonlarına göre listeletmek için aşağıdaki satırı kullanabilirsiniz.
  let roller = guild.roles.array().sort((x, y) => x.position-y.position).reverse().map(x => "<:nokta:708101762904621078> " + x.name + " <:canright:603301130730078219> ``" + x.members.size + " Üye``").join('\n');
    let rroller = guild.roles.array().sort((x, y) => x.position-y.position).reverse().map(x => x.name + " <:canright:603301130730078219> ``" + x.members.size + " Üye``").join('\n');
 
  // Üyelerine göre sıralama için ise aşağıdaki satırı kullanabilirsiniz.
  //let roller = message.guild.roles.array().sort((x, y) => x.members.size-y.members.size).reverse().map(x => x.members.size + " | " + x.name).join('\n');
const canbey = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setDescription()
  .setAuthor(`${guild.name} Rol Listesi`, guild.iconURL)
  //return message.channel.sendEmbed(canbey); 
let embed = new Discord.RichEmbed(); // Embedinizin özelliklerini buraya belirtebilirsiniz.
  let atilacak = `${roller} \n\n<a:discord:601758582580445220> Toplamda \`\`"${guild.roles.size}"\`\` adet rol bulunuyor!`; // Açıklamaya yazılacak 2000 karakteri geçen yazı.
  for (var i = 0; i < (Math.floor(atilacak.length/2048)); i++) {
    message.channel.send(embed.setDescription(atilacak.slice(0, 2048)).setAuthor(`${guild.name} Rol Listesi`, guild.iconURL));
    atilacak = atilacak.slice(2048);
  };
  if (atilacak.length > 0) message.channel.send(embed.setDescription(atilacak).setAuthor(`${guild.name} Rol Listesi`, guild.iconURL));
  //message.channel.send(`# ${message.guild.name} Rol Listesi \n\n${roller} \n\nToplamda "${message.guild.roles.size}" adet rol bulunuyor!`, {code: "xl", split: true});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolsay'],
  permLevel: 0
};

exports.help = {
  name: 'rol-say',
  description: 'Sunucudaki rolleri kişi sayılarıyla birlikte pozisyonlarına göre listeler.',
  usage: 'rol-say',
  kategori: 'kullanıcı'
};