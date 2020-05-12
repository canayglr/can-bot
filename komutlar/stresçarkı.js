const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} bir stres çarkı çevirdi !`,
            image: {
                url: "https://media.giphy.com/media/93fK5DxflxglTUehkN/giphy.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, Stres Çarkın ${bitiş.toFixed(2)} Saniye Döndü !`
            }
        });
    }, 5 * 3000);
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stresçarkı',
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'stresçarkı'
};
