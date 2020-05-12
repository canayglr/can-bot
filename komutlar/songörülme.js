exports.run = async (client, message, args) => {
  try {
    let user;
    if (message.mentions.users.size) {
      user = message.mentions.users.first();
    }
    else if (args.id) {
      user = await message.guild.fetchMember(args.id);
      if (user) {
        user = user.user;
      }
    }
    if (!user) {
      
      return message.reply("<a:canuyari:603528216275058718> **Doğru kullanım**: -songörülme <kişi>")
    }

    let color, description;
    if (user.lastMessageID) {
      let lastSeen = Date.now() - user.lastMessage.createdTimestamp;
      let seconds = lastSeen / 1000;
      let days = parseInt(seconds / 86400);
      seconds = seconds % 86400;
      let hours = parseInt(seconds / 3600);
      seconds = seconds % 3600;
      let minutes = parseInt(seconds / 60);
      seconds = parseInt(seconds % 60);

      lastSeen = `${seconds} saniye`;
      if (days) {
        lastSeen = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
      }
      else if (hours) {
        lastSeen = `${hours} saat ${minutes} dakika ${seconds} saniye`;
      }
      else if (minutes) {
        lastSeen = `${minutes} dakika ${seconds} saniye`;
      }

      color = 0x00AE86;
      description = '<:saat:645251296068239380> Son Görülme: <@!' + user.id + '> `' + lastSeen + '`';
    }
    else {
      color = 0x00AE86;
      description = '<a:death:645249423244525599> Öldü Galiba Hiç Görülmedi : <@!' + user.id + '>';
    }

    message.channel.send({
      embed: {
        color: color,
        title: 'Son Görülme',
        description: description
      }
    }).catch(e => {
      console.log(e);
    });
  }
  catch (e) {
    console.log(e);
  
}
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["görüldü"],
  permLevel: 0
};

exports.help = {
  name: 'songörülme',
  description: 'Etiketlenen kişinin son görülme zamanını belirtir.',
  usage: 'songörülme <kişi>'
};