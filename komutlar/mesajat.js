const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "384296034521579520") return;
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(2).join(' ');
  let user = args[0]
  let sunucu = args[1]
  if (!sunucu) return message.reply("Sunucuyu Etiketleyiniz !")
  if (reason.length < 1) return message.reply('Ne göndericem onuda yazı ver.');
  if (user.length < 0) return message.reply('Kime Mesaj atacam onuda yazı ver.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Kurucumdan Sana Bir Mesaj Var !**`)
  .setTimestamp()
  .setDescription(reason);
  return client.guilds.get(sunucu).members.get(user).send(embed).then((member) => {
            message.reply("Başarılı !")
        }).catch(() => {
            console.error
            message.reply("Bir Hata Oluştu !");
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4
};

exports.help = {
  name: 'mesajat',
  description: 'Bir kullanÄ±cÄ±ya Ã¶zel mesaj yollar.',
  usage: 'mesajat'
};