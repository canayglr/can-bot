const Discord = require('discord.js')

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  const tag = args.slice(0).join(' ');
if(!tag) return message.reply(`:warning: Bir Tag Girmelisiniz Örnek Kullanım; \n \`-tagtaraması ❈\``)
  const memberss = message.guild.members.filter(member => member.user.username.includes(tag));
  if (memberss.size > 100) return message.channel.sendMessage(`**<a:elmas:605083521199112199> Bu Kadar Çok Kişiyi Discord Paylaşmama İzin Vermiyor \`\`${memberss.size}\`\` Kişi Var !<a:canx:616921650490900501>**`)
    const embed = new Discord.RichEmbed()
        .addField(`Kullanıcı Adında ${tag} Tagı Olan ${memberss.size} Kişi Var`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Kimsenin kullanıcı Adında \`${tag}\` Tagı Bulunmuyor.`)
        .setColor("RANDOM")
    message.channel.send({embed}).then((member) => {
        }).catch(() => {
             // Failmessage
            message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`**<a:elmas:605083521199112199> Bir Hata Oluştu <a:canx:616921650490900501>**\n<a:elmas:605083521199112199> Lütfen Tekrar Deneyiniz !`).setColor("RANDOM").setAuthor(`${message.author.username} tarafından yapıldı.`, message.author.avatarURL).setTimestamp());
    });
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['tag-tara', 'tagtara', 'tagtaraması', 'tagtaraması', 'tagtarama'],
    permLevel: 0
}

exports.help = {
    name: 'tagtara',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tagtara <tag>'
}
