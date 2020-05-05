const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'https://66.media.tumblr.com/3b07d3861252518beb6fca2cc9c1aec7/tumblr_na9srfRfJC1t86hbto1_500.jpg',
'https://img-s2.onedio.com/id-59f89c24be11ebe60e5abfdf/rev-0/w-635/listing/f-jpg-webp/s-54c2f4605c22a10f38e3f592c499cbf97e2d8c3f.webp',
'https://scontent-iad3-1.cdninstagram.com/vp/392e2ea97af7401486a87f91a1a505f0/5CFF12C2/t51.2885-15/e35/49759353_161602001474996_963353063265903421_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com',
'https://scontent-ams3-1.cdninstagram.com/vp/cb78bd71455cb6fcf66a0a23c45a28f1/5CB77ED3/t51.2885-15/e35/40047814_542158312907299_1671309879547002880_n.jpg?_nc_ht=scontent-ams3-1.cdninstagram.com&se=7&ig_cache_key=MTg2MDMzOTA4NDIyNjIyODMyNg%3D%3D.2',
'https://img-s1.onedio.com/id-584595d74434547a162f6e3c/rev-0/w-500/s-1a2ec94ac1e02f76bc8ccab9ee110ae64b6cd4ae.jpg',
'http://www.makaleyazari.com/wp-content/uploads/2012/04/acun-yok-art%C4%B1k-caps.jpg',
'https://galeri12.uludagsozluk.com/506/gulduren-capsler_619496.png',
'https://i1.imgiz.com/rshots/10188/komik-capsler-1_10188057-1420_640x360.jpg',
'https://img-s2.onedio.com/id-5788cc3e2be3de2d0bab5701/rev-0/w-635/listing/f-jpg-webp/s-225a7006d8d83861498775452b8f615eafed6ef2.webp',
'https://scontent-amt2-1.cdninstagram.com/vp/e58440e6681dc6ef887d720901c76f7a/5CC3B4F6/t51.2885-15/e35/47583661_865348016969256_3279543920152563248_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&ig_cache_key=MTk0Nzk4OTQ4OTYzNzAxMjE3OA%3D%3D.2',
'https://img-s2.onedio.com/id-5bdb0a6892696c2e1ece8afd/rev-0/w-600/h-300/s-7514d8da1d64cb422e542891a62cd1f3e5c8378b.jpg',
'http://hunilisozluk.net/wp-content/uploads/2018/08/Televizyon-Programlar%C4%B1-%C4%B0le-%C4%B0lgili-Att%C4%B1klar%C4%B1-Tweetlerle-Hafta-Boyunca-G%C3%BCld%C3%BCren-Goygoycular-9.png',
'https://scontent-atl3-1.cdninstagram.com/vp/c41b28ab3a5539d20bd83b9404e5080d/5CD980B4/t51.2885-15/e35/s480x480/47068636_1447134615422623_7077075340795923776_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com',
'https://scontent-ort2-2.cdninstagram.com/vp/cd2188a81cbdf0418d41ee66b3877157/5D00D21E/t51.2885-15/e35/47694246_380517919190816_7950607585594193876_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com',
'https://imgrosetta.mynet.com.tr/file/1964977/728xauto.png',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcUVcP-_iyMnZvM97MLht0IpvAiWqmbGHAh_98WNfROMmWcOOHA',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6heVO9cdqjlkEaU6iPPqGpOd0o0w5CjVVoAzoil-DZV_r_mHy',
];
var postver = Math.floor(Math.random()*Random.length);
const post= new Discord.RichEmbed()
.setImage(`${Random[postver]}`)
.setColor("RANDOM")
.setTimestamp()
message.channel.send(post)
.then(embedMessage => {
		embedMessage.react('👎');
		embedMessage.react('😂');
	});
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'post',
description: 'Rastgele Eğlenceli Postlar Gösterir',
usage: 'post'
};
