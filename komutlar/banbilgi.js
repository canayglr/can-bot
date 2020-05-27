const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('<a:canuyari:603528216275058718> Bu komutu kullanabilmek için `Üyeleri Yasakla` iznine sahip olmalısın!');
  let yashinu = ayarlar.prefix
  if(!args[0] || isNaN(args[0])) return message.reply(`Geçerli bir ban yemiş kullanıcı ID'si belirtmelisin! => \`${yashinu}banbilgi id\``)
  try {
    message.guild.fetchBan(args.slice(0).join(' '))
    .then(({ user, reason }) => message.channel.send(new Discord.RichEmbed().setAuthor(user.tag, user.avatarURL).setColor('RANDOM').addField('<:banned:710134375961985065> Banlanan Kullanıcı', `${user.tag} \`(${user.id})\``).setDescription(`**<:banned:710134375961985065> Ban Sebebi:** ${reason}`)))
  } catch(err) { message.reply('**<a:canuyari:603528216275058718>  Belirtilen ID numarasına sahip banlanmış kullanıcı bulamadım veya bir sorun oluştu ! <a:canx:616921650490900501>**') }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['banbilgi', 'baninfo'],
  permLevel: 0
};

exports.help = {
  name: 'ban-bilgi',
  description: "IDsi girilen kullanıcının ban bilgilerini gösterir.",
  usage: 'ban-bilgi <id>',
  kategori: 'yetkili'
};