const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
const slots = ['<:dollar:709464454076825600>', '🍒', '💎'];

exports.run = (client, message, args) => {
  message.channel.send("<a:igne:601758440020246528> Slot Oyunu Başlatılıyor...").then(async message => {
setTimeout(() => {
          let embed = new Discord.RichEmbed()
			  .setColor('RANDOM')
        .setTitle('C   A   N   -   S   L   O   T')
			  .setImage("https://i.hizliresim.com/OAqofs.gif")
			    message.edit(embed)
      }, 1000);
      setTimeout(() => {
          var slot1 = slots[Math.floor(Math.random() * slots.length)];
			var slot2 = slots[Math.floor(Math.random() * slots.length)];
			var slot3 = slots[Math.floor(Math.random() * slots.length)];

			if (slot1 === slot2 && slot1 === slot3) {
				let embed1 = new Discord.RichEmbed()
			  .setColor('RANDOM')
			  .setFooter(message.author.tag, message.author.avatarURL)
			  .setImage("http://pluspng.com/img-png/win-png-subscribe-343.png")
			  .setTitle("__**TEBRİKLER KAZANDINIZ.**__")
			  .setDescription(`${slot1} : ${slot2} : ${slot3}`)
			    message.edit(embed1)
			} else {
				let embed2 = new Discord.RichEmbed()
			  .setColor('RANDOM')
			  .setFooter(message.author.tag, message.author.avatarURL)
			  .setImage("https://pngimage.net/wp-content/uploads/2018/06/lose-png-7.png")
			  .setTitle("__**EYVAH KAYBETTİN !**__")
			  .setDescription(`${slot1} : ${slot2} : ${slot3}`)
			    message.edit(embed2)
}
      }, 4500);


			
		
  });
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['slots'],
permLevel: 0
};

exports.help = {
name: 'slot',
description: 'Bulunduğunuz Sunucuyu Hacklersiniz !',
usage: 'hackle'
};
﻿
