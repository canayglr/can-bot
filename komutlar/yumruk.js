const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 var cevaplar = ['<a:box:652851251322683392> **Boks makinesi kırıldı aq `3000`** !', 
                 '<a:box:652851251322683392> **Çok yavaş vurdun bir daha dene `100`** !', 
                 '<a:box:652851251322683392> **Eh,yani `900`** !', 
                 '<a:box:652851251322683392> **Hm oluyor oluyor `1000`** !',
                 '<a:box:652851251322683392> **Acayip yavaş vurdun `50`** !', 
                 '<a:box:652851251322683392> **Çok iyi! :boxing_glove: `2000`** !', 
                 '<a:box:652851251322683392> **Daha iyisini yapabilirsin! :muscle: `700`** !',
                 '<a:box:652851251322683392> **Daha iyisini yapabilirsin! :muscle: `550`** !', 
                 '<a:box:652851251322683392> **Niye 1000 değil `999`** !', 
                 '<a:box:652851251322683392> **Orta! `1250`** !', 
                 '<a:box:652851251322683392> **Yine iyisin `1150`** !', 
                 '<a:box:652851251322683392> **Fena değil `1200`** !'
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 message.channel.send(`<@!${message.author.id}> Bi Yumruk Salladı !`).then(async message => {
                  setTimeout(() => {
                    const ping = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setDescription(cevap)
 .setImage("https://cdn.discordapp.com/emojis/652849100047515698.gif?v=1")
 return  message.channel.sendEmbed(ping).then(embedMessage => {
    embedMessage.react('🥊');
      }, 1000)});

});
};
exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boks-makinası',"yumruk"],
   permLevel: 0
 };

 exports.help = {
   name: 'boks',
   description: 'Boks makinesine vurur.',
   usage: 'boks-makinesi'
}