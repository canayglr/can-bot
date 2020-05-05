const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  message.channel.send(message.guild.name + "❗ Discordunu Hackleme Operasyonu Başlatılıyor...").then(async message => {
                  setTimeout(() => {
          message.react('🕵️');
      }, 1000);
        setTimeout(() => {
          message.edit('🕵️ 💣');
      }, 2000);
      setTimeout(() => {
          message.edit('🕵️ 💣💣');
      }, 3000);
      setTimeout(() => {
          message.edit('🕵️ 💣💣💣');
      }, 4000);
      setTimeout(() => {
          message.edit('🕵️ 💣💣💣💣');
      }, 5000);
      setTimeout(() => {
          message.edit('🕵️ 💣💣💣');
      }, 6000);
      setTimeout(() => {
          message.edit('🕵️ 💣💣');
      }, 7000);
      setTimeout(() => {
          message.edit('🕵️ 💣');
      }, 8000);
      setTimeout(() => {
          message.edit('🕵️');
      }, 9000);
  setTimeout(() => {
          message.edit('❗ Hackleme İşlemi İptal Edildi ! *Belkide Hiç Başlamamıştır* 😉');
      }, 10000);
  });
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'hackle',
description: 'Bulunduğunuz Sunucuyu Hacklersiniz !',
usage: 'hackle'
};
﻿
