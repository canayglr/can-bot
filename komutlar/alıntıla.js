const Discord = require('discord.js')
exports.run = async (client, message, args) => {

  const id = args[0]
  if (!id) return message.channel.send(`<a:canuyari:603528216275058718> Bir mesaj ID'si belirtmelisin.`)
  message.channel.fetchMessages({ limit: 1, around: id }).then(messages => {
    const msg = messages.first()
    if (!msg) return message.channel.send(`<a:canx:616921650490900501> Silinmiş veya bulunamayan mesaj.`)
    let embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setAuthor(msg.author.tag, msg.author.avatarURL)
    .setDescription(`${msg.content}\n\n[[**Mesaja Git <a:tiklaa:605726140723757077>**](${msg.url})]`)
    .setFooter(`${message.author.tag} tarafından alıntılandı , | Kanal : #${msg.channel.name}`, message.author.avatarURL)
    message.channel.send(embed)
  })
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['alıntı','alintila'],
  permLevel: 0
}
exports.help = {
  name: 'alıntıla',
  description: "ID'sini yazdığınız mesajı alıntılar.",
  usage: 'alıntıla <mesaj id>'
}
