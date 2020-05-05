const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
  	message.delete();
	const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('**Veda Vakti <:uzgunum:601758404288970765>** Umarım Bugüne Kadar Size İyi Hizmet Verebilmişimdir , Gitmeyi Ben De İstemedim Geliştiricim Güncellemeleri Durdurdu ve Gitme Vaktim Geldi Umarım Çok Daha Mutlu Olursun Dostum Hoşçakal')
    .setThumbnail('https://media.giphy.com/media/QB4e6Ax3jpdPTGyDOi/giphy.gif')
    message.author.sendEmbed(pingozel)
    client.guilds.get("537614145982562314").channels.get("547149299029508223").send(`${message.author.username}#${message.author.discriminator} **-canbot** Komutunu Kullandı ! [ ${message.guild.name} ]`);
    message.channel.sendMessage(`Özelden Mesaj Gönderdim Kanka *( Gelmediyse DM'ni Aç ! )*`).then(message => message.delete(3000));
}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'canbot',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
