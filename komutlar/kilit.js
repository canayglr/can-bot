const Discord = require('discord.js');
const ms = require('ms');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

exports.run = (client, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu Komudu Kullanmak İçin ``Yönetici`` Yetkiniz Olmalıdır !');
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('<a:canuyari:603528216275058718> UYARI', '`kilit` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock', 'aç'];
  if (!time) return message.reply('Doğru kullanım: ' + prefix + 'kilit <süre örneğin: 2 min>');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send('<a:cantick:623582918203408384> Kanal Kilidi Açıldı İyi Sohbetler <a:deb:601758988035555344>');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`<a:canuyari:603528216275058718> Kanal **${ms(ms(time), { long:true })}** Süreyle Kilitlendi Hazırda Bekle ! *(Açmak İçin -kilit aç)*`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
          }).then(message.channel.send('<a:cantick:623582918203408384> Kanal Kilidi Açıldı İyi Sohbetler <a:deb:601758988035555344>')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ld'],
  permLevel: 2
};

exports.help = {
  name: 'kilit',
  description: 'Kanalı istediğiniz kadar süreyle kitler.',
  usage: 'kilit <süre>'
};﻿
