﻿const Discord = require('discord.js');
const { stripIndents } = require('common-tags');


exports.run = (client, msg, args) => {
var kurucu = "384296034521579520"

let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
   
    //yönetici
    if (msg.guild.me.hasPermission("ADMINISTRATOR")) x = "✔️"
    if (!msg.guild.me.hasPermission("ADMINISTRATOR")) x = "❌"
   
    //Denetim kaydı
    if (msg.guild.me.hasPermission("VIEW_AUDIT_LOG")) x2 = "✔️"
    if (!msg.guild.me.hasPermission("VIEW_AUDIT_LOG")) x2 = "❌"
   
    //Sunucuyu yönet
    if (msg.guild.me.hasPermission("MANAGE_GUILD")) x3 = "✔️"
    if (!msg.guild.me.hasPermission("MANAGE_GUILD")) x3 = "❌"
   
    //Rolleri yönet
    if (msg.guild.me.hasPermission("MANAGE_ROLES")) x4 = "✔️"
    if (!msg.guild.me.hasPermission("MANAGE_ROLES")) x4 = "❌"
   
    //Kanalları yönet
    if (msg.guild.me.hasPermission("MANAGE_CHANNELS")) x5 = "✔️"
    if (!msg.guild.me.hasPermission("MANAGE_CHANNELS")) x5 = "❌"
   
    //üyeleri at
    if (msg.guild.me.hasPermission("KICK_MEMBERS")) x6 = "✔️"
    if (!msg.guild.me.hasPermission("KICK_MEMBERS")) x6 = "❌"
   
    //üyeleri yasakla
    if (msg.guild.me.hasPermission("BAN_MEMBERS")) x7 = "✔️"
    if (!msg.guild.me.hasPermission("BAN_MEMBERS")) x7 = "❌"
   
    //mesajları yönet
    if (msg.guild.me.hasPermission("MANAGE_MESSAGES")) x8 = "✔️"
    if (!msg.guild.me.hasPermission("MANAGE_MESSAGES")) x8 = "❌"
   
    //kullanıcı adlarını yönet
    if (msg.guild.me.hasPermission("MANAGE_NICKNAMES")) x9 = "✔️"
    if (!msg.guild.me.hasPermission("MANAGE_NICKNAMES")) x9 = "❌"
   
    //emojileri yönet
    if (msg.guild.me.hasPermission("MANAGE_EMOJIS")) x10 = "✔️"
    if (!msg.guild.me.hasPermission("MANAGE_EMOJIS")) x10 = "❌"
   
    //webhookları yönet
    if (msg.guild.me.hasPermission("MANAGE_WEBHOOKS")) x11 = "✔️"
    if (!msg.guild.me.hasPermission("MANAGE_WEBHOOKS")) x11 = "❌"
   
    msg.author.send(stripIndents`
    \`\`\`diff
    ${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet
\`\`\`
   `)
  msg.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'botyetki',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'botyetki'
};