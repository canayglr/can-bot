exports.run = (client, message, args) => {
    message.channel.send("**Dostum Sigaran Benden** :smoking: **Yak Yak Yak**").then(async msg => {
                    setTimeout(() => {
            message.react(':smoking:');
        }, 1000);
          setTimeout(() => {
            message.react(':smoking::cloud::cloud::cloud:');
        }, 1500);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud:');
        }, 2000);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud:');
        }, 2500);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud::cloud:');
        }, 3000);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud::cloud::cloud:');
        }, 3500);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud:');
        }, 4000);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud:');
        }, 4500);
        setTimeout(() => {
            msg.edit(':smoking::cloud:');
        }, 5000);
    setTimeout(() => {
            msg.edit('**Sigara Bitti** *Tıpkı Yaşama Sevincim Gibi*');
        }, 5500);
    });
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'Sigara iÃ§ersiniz.',
  usage: 'sigara'
};