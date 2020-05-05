const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {

  var öneri = args.slice(0).join(' ');
  var guildID = "537614145982562314";
  var channelID = "645608123205156904";
    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 500
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);
    if (!öneri) return message.reply("<a:canuyari:603528216275058718> Bir Mesaj Belirtin! Doğru Kullanım: **-öneri <mesaj>**");

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`<a:canuyari:603528216275058718> Hey Dostum Zaten Bir Öneride Bulundun ! **${time.hours}h ${time.minutes}m ${time.seconds}s** Sonra Tekrar Atabilirsin !`)
    } else {
    
    var embed = new Discord.RichEmbed()
      .setTimestamp()
      .addField("Eylem:", "Öneri")
      .addField("Kullanıcı:", message.author.tag)
      .addField("ID", message.author.id)
      .addField("Sunucu", message.guild.name)
      .addField('Sahibi:', message.guild.owner + ' (' + message.guild.ownerID + ')')
      .addField("Öneri", öneri)
    
    client.guilds.get(guildID).channels.get(channelID).send(embed);
    message.channel.send("<a:cantick:623582918203408384> **Öneriniz Alınmıştır , Teşekkür Ederiz !**");
  };
    db.set(`daily_${message.author.id}`, Date.now())   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'öneri <mesaj>' 
};