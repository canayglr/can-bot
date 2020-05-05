const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('<a:canuyari:603528216275058718> UYARI ', '`headshot` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kime HeadShot Atacağını Yazmalısın !').catch(console.error);
    message.channel.send('Kafasına sıkılıyor....')
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit(`${Random[headshot]}`));
     var Random = [
      ':scream: Tam İsabet !',
      ':ghost: Iskaladın Dostum, Tekrar Dene !',
    ];
    var headshot = Math.floor(Math.random()*Random.length);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'headshot',
  description: 'İstediğiniz kişinin kafasına sıkar.',
  usage: 'headshot [kullanıcı]'
};