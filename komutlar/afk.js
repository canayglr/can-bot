const db = require("quick.db")

exports.run = function(client, message, args) {

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  if(!REASON) return message.channel.send("AFK olmak için bir sebep belirtin.");
 if(REASON.includes("everyone")) {
	   message.delete();
       message.reply(`Bi Sen Akıllısın Zaten Kardeşim Şuan Attım Bak <a:hoop:626102473408380938>`).then(message => message.delete(3000));
	   } else
	   if(REASON.includes("here")) {
	   message.delete();
       message.reply(`Bi Sen Akıllısın Zaten Kardeşim Şuan Attım Bak <a:hoop:626102473408380938>`).then(message => message.delete(3000));
	   } else
       if(REASON.includes("discord.gg")) {
	   message.delete();
       message.reply(`Bi Sen Akıllısın Zaten Kardeşim Reklam Yapamazsın <a:hoop:626102473408380938>`).then(message => message.delete(3000));
       } else {
      
      db.set(`afks_${message.author.id}`, REASON)
             message.reply(`Artık **${REASON}** sebebi ile **AFK** modundasın! <a:cantik:601758596937809941>`).then(message => message.delete(8000));
  
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());

       }
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk', 
  description: 'Kullanıcııyı afk moduna sokar.',
  usage: 'afk <sebep>'
};