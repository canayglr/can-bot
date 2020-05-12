const Discord = require('discord.js');

exports.run = function (client, message, args) {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('<a:canuyari:603528216275058718> Bu Komudu Kullanmak İçin ``Mesajları Yönet`` Yetkiniz Olmalıdır !');
   let kişi = message.mentions.users.first();
   if (!kişi) return message.reply('<a:canuyari:603528216275058718> Lütfen Bir Kişiyi Etiketleyiniz !')
   let yazi = args.slice(1).join(' ');
   if (!yazi) return message.reply('<a:canuyari:603528216275058718> Lütfen Yazdırmak İstediğiniz Mesajı Yazınız')
   message.delete()
   message.channel.createWebhook(kişi.username, kişi.avatarURL)
   .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
       .then(wb => {
           const hook = new Discord.WebhookClient(wb.id, wb.token);
           hook.send(yazi)
           hook.delete()
       })
       .catch(console.error))
       .catch(console.error);
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
};

exports.help = {
   name: 'fakemesaj',
   description: 'fakemesaj',
   usage: 'fakemesaj'
};
