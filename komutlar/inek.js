const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('<a:canuyari:603528216275058718> Bir Yazı Yaz Dostum !');
  message.channel.sendCode("asciidoc", `
  |------------------------|
  [ ${mesaj} ]
  |------------------------|
          \    ^__^
           \   (oo)\_______
              (__)\       )--*
                  ||----w||
                  ||     || `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'inek',
  description: 'inek',
  usage: 'inek'
};
