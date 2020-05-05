const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  const arvelosembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor('BİLGİ', `${message.guild.iconURL}`)
        .addField(`<a:elmas:605083521199112199> Sunucuda Bulunan Kişi Sayısı`, `[ __**${message.guild.memberCount}**__ ]`)
		.addField(`<a:hoparlor:627885351200882698> Ses Kanallarında Bulunan Kişi Sayısı`, `[ __**${count}**__ ]`)
        .setTimestamp()
        .setFooter(`${message.author.username} tarafından istendi.`)
		
		
 
  message.channel.sendEmbed(arvelosembed)
  message.delete()
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'kullanıcıyı susturur.',
  usage: '(d!say'
};