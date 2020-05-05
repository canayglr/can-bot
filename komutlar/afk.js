const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async(client, message, args) => {

      let sebep = args.slice(0).join(" ");
      if (!sebep) return message.reply("AFK olma nedenini yazmalısın!");
      let user = message.member
      let yuser = message.member.nickname
      //db.set(`userim_${message.guild.id}`, yuser)
      db.set(`guild_${message.guild.id}`, message.guild.id)
	   if(sebep.includes("everyone")) {
	   message.delete();
       message.reply(`Bi Sen Akıllısın Zaten Kardeşim Şuan Attım Bak <a:hoop:626102473408380938>`).then(message => message.delete(3000));
	   } else
	   if(sebep.includes("here")) {
	   message.delete();
       message.reply(`Bi Sen Akıllısın Zaten Kardeşim Şuan Attım Bak <a:hoop:626102473408380938>`).then(message => message.delete(3000));
	   } else
       if(sebep.includes("discord.gg")) {
	   message.delete();
       message.reply(`Bi Sen Akıllısın Zaten Kardeşim Reklam Yapamazsın <a:hoop:626102473408380938>`).then(message => message.delete(3000));
       } else {
      
      db.set(`afks_${message.author.id}`, sebep)
             message.reply(`Artık **${sebep}** sebebi ile **AFK** modundasın! <a:cantik:601758596937809941>`).then(message => message.delete(8000));
    //user.setNickname(`💤 ` + yuser)

	  //message.reply(`Artık **${sebep}** sebebi ile **AFK** modundasın!`).then(message => message.delete(8000))};
   

 } 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>'
};