const Discord = require('discord.js')
const instagram = require("user-instagram")
 
exports.run = (client, message, args) => {
    let kullanici = args.join(' ');
    if(!kullanici) return message.reply(`Bir kullanıcı adı girmedin`)

instagram('https://www.instagram.com/' + kullanici)
.then(data => {

  const biocuk = (data.bio.length === 0 ? 'Yok' : data.bio)  
  const isimcik = (data.fullName.length === 0 ? 'Yok' : data.fullName)

  var gizlimi;
  var onaylimi;

  if (data.isPrivate === false) gizlimi = "Hayır"
  if (data.isPrivate === true) gizlimi = "Evet"//<a:cantik:601758596937809941>
  if (data.isVerified === false) onaylimi = "Hayır"//<a:canx:616921650490900501>
  if (data.isVerified === true) onaylimi = "Evet"

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${kullanici} İnstagram hesabı hakkında bilgi`)
    .setThumbnail(`${data.avatarHD}`)
    .addField('<:instagram:645326016285507614> Tam ismi', isimcik)
    .addField('<:instagram:645326016285507614> Takipçi sayısı', `${data.subscriberCount}`)
    .addField('<:instagram:645326016285507614> Takip ettiği kişi sayısı', `${data.subscribtions}`)
    .addField('<:instagram:645326016285507614> Gönderi sayısı', `${data.postCount}`)
    .addField('<:instagram:645326016285507614> Biografisi', biocuk)
    .addField('<:instagram:645326016285507614> ID', `${data.id}`)
    .addField('<:instagram:645326016285507614> Profili gizli mi?', `${gizlimi}`)
    .addField('<:instagram:645326016285507614> Profili onaylanmış mı?', `${onaylimi}`)
    .addField('<:instagram:645326016285507614> Hesabın linki', `${data.profileLink}`)
    .setTimestamp()
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
    
  message.channel.send(embed)
}) 
}

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: [],
    permLevel: 0 
  };
  
  exports.help = {
    name: 'instagram'
  };