const discord = require('discord.js');
exports.run = async (client,message,args) => { 
if(!args[0]) { return message.channel.send("<a:canuyari:603528216275058718> Lütfen Emoji ismi giriniz")}
   try {
      const emote = discord.Util.parseEmoji(args[0]);
   
      if (emote.animated === true) {
        const URL = `https://cdn.discordapp.com/emojis/${emote.id}.gif?v=1`;
          const embed = new discord.RichEmbed()
      .setAuthor(emote.name,URL)
      .addField('Emoji Bilgileri: ',`**
<:nokta:708101762904621078> Emoji Hareketlimi : Evet
<:nokta:708101762904621078> Emoji ismi : ${emote.name}
<:nokta:708101762904621078> Emoji Id'si : ${emote.id}
<:nokta:708101762904621078> Emoji Url'si : [tıkla](${URL})
**`)
      .setFooter(message.author.tag,message.author.avatarURL)
      .setColor('2F3136')
      .setImage(URL)
      .setTimestamp()
      .addBlankField(true)
      message.channel.send({embed});
      } else if (emote.id === null) {
      return message.channel.send('hata')
      } else {
        const URL = `https://cdn.discordapp.com/emojis/${emote.id}.png`;
           const embed = new discord.RichEmbed()
      .setAuthor(emote.name,URL)
      .addField('Emoji Bilgileri: ',`**
<:nokta:708101762904621078> Emoji Hareketlimi : Hayır
<:nokta:708101762904621078> Emoji ismi : ${emote.name}
<:nokta:708101762904621078> Emoji Id'si : ${emote.id}
<:nokta:708101762904621078> Emoji Url'si : [tıkla](${URL})
**`)
      .setColor('2F3136')
      .setImage(URL)
      .setTimestamp()
      .setFooter(message.author.tag,message.author.avatarURL)
      .addBlankField(true)
      message.channel.send({embed});
      }
    } catch (error) {
      if (error.message === 'Hata') {
        message.reply('<a:canuyari:603528216275058718>  Bu isimde emoji bulunamadı.!');
      }
    }
client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");  
  }

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-bilgi'],
  permLevel: 0
  
};
exports.help = {
    name: 'emoji-göster',
    usage: 'jumbo <emoji>',
    description: '!',

};