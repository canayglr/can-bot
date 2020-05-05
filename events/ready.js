const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  client.user.setStatus("idle");
     var oyun = [
          `${prefix}yardım • ${client.guilds.size} Sunucu • ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı`,
          `${prefix}öner • İstek Ve Önerilerinizi Bize Bildirin !`,
          `${prefix}yenilik • Yepyeni Özellikleri Görebilirsiniz !`,
          `${prefix}davet • Botumuzu Sunucunuza Davet Edebilirsiniz !`
      ];

      setInterval(function() {

          var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

          client.user.setGame(oyun[random]);
          }, 3 * 5000);
  }
