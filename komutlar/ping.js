const Discord = require('discord.js');
const db = require('quick.db');

const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
   var olcum = await message.channel.send( '<a:discord:601758582580445220> Ölçüm Yapılıyor, Lütfen Bekleyiniz.');
 var sonuc = await message.channel.send( "<a:cantick:623582918203408384> Veriler Alındı !").then(msg => msg.delete(3000))
     await olcum.edit( `<a:canload:601758614058827777> **Tepki Gecikmesi** \`${Math.round((sonuc.createdTimestamp - olcum.createdTimestamp - client.ping) )}\`**ms**\n<:saat:645251296068239380> **Bot Gecikmesi** \`${Math.round(client.ping)}\`**ms**`);
///
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping was here',
  usage: 'ping'
}