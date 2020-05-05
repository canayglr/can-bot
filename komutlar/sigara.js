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
        }, 1800);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud:');
        }, 2300);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud::cloud:');
        }, 2800);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud::cloud::cloud:');
        }, 3300);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud::cloud::cloud::cloud:');
        }, 3800);
        setTimeout(() => {
            msg.edit(':smoking::cloud::cloud:');
        }, 4300);
        setTimeout(() => {
            msg.edit(':smoking::cloud:');
        }, 4800);
    setTimeout(() => {
            msg.edit('**Sigara Bitti** *Tıpkı Yaşama Sevincim Gibi*');
        }, 5300);
    });
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