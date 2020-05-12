const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if (!message.member.voiceChannel) return message.channel.send("<a:canuyari:603528216275058718> Bir ses kanalında olman gerek")
    let Gullanici = message.mentions.members.first();
    if (!Gullanici.voiceChannel) return message.channel.send("<a:canuyari:603528216275058718> Bu kullanıcı herhangi bir ses kanalında değil")
    if (!Gullanici) return message.channel.send("<a:canuyari:603528216275058718> Kullanıcı belirtmedin")
    if (message.member.voiceChannel.id === Gullanici.voiceChannel.id) return message.channel.send("<a:canuyari:603528216275058718> Zaten aynı kanaldasınız")
    const filter = (reaction, user) => {
        return ['623582918203408384', '616921650490900501'].includes(reaction.emoji.id) && user.id === Gullanici.id;
    };
    let casper = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription(`<a:canuyari:603528216275058718> ${Gullanici} , ${message.author} senin yanına \`\`(${Gullanici.voiceChannel.name})\`\` odasına gelmek istiyor !`)
            .setFooter('CAN BOT') 

    let mesaj = await message.channel.send(casper)
    await mesaj.react("623582918203408384")
    await mesaj.react("616921650490900501")
    mesaj.awaitReactions(filter, {
        max: 1,
        time: 60000,
        errors: ['time']
    }).then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.id === '623582918203408384') {
            let kabul = new Discord.RichEmbed()
                .setColor("GREEN")
                .setDescription(`<a:canuyari:603528216275058718> ${message.author} başarıyla giriş yaptı ! <a:cantick:623582918203408384>`)
            message.channel.send(kabul)
           message.member.setVoiceChannel(Gullanici.voiceChannel)
        } else {
            let sama = new Discord.RichEmbed()
                .setColor("RED")
                .setDescription(`<a:canuyari:603528216275058718> ${message.author} odaya gelmde dedi ! <a:canx:616921650490900501>`)
            message.channel.send(sama)
        }
    })
}

exports.conf = {
    enabled: true,
    aliases: ['go'],
    permLevel: 0
};

exports.help = {
    name: "git",
    description: "Etiketlediğiniz kullanıcıyı odaya çeker",
    usage: "çek @kullanıcı"

};