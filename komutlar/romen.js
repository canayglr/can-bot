const Discord = require('discord.js')
const db = require('quick.db')
const numerals = {
                                        "Ⅿ": 1000,
                                        "ⅭⅯ": 900,
                                        "Ⅾ": 500,
                                        "ⅭⅮ": 400,
                                        "Ⅽ": 100,
                                        "ⅩⅭ": 90,
                                        "Ⅼ": 50,
                                        "ⅩⅬ": 40,
                                        "Ⅹ": 10,
                                        "Ⅸ": 9,
                                        "Ⅴ": 5,
                                        "Ⅳ": 4,
                                        "I": 1
                                }
exports.run = async(client, message, args) => {

        
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('**:warning: Uyarı :warning:', 'romen adlı komutu özel mesajlarda kullanamazsın.**')}
        if(!args[0]) {
                const embed = new Discord.RichEmbed()
                        .setDescription('Lütfen geçerli bir sayı yazın!')
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(isNaN(args[0])) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`**Lütfen bir sayı girin!**`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
       
        if(args[0] > 999999) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`**Lütfen 999999 veya daha düşük bir sayı girin!!**`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        const sayi = args[0]
 
        if(args[0] === 0) {
                const embed = new Discord.RichEmbed()
                        .setDescription('Karşılıksız')
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        let result = '';
        for (const [numeral, value] of Object.entries(numerals)) {
                while (args[0] >= value) {
                        result += numeral;
                        args[0] -= value;
                }
        }
        const embed = new Discord.RichEmbed()
                .addField('Yazılan Sayı', sayi)
                .addField('Romen Karşılığı', result)
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send({embed})
    }
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['roman'],
        permLevel: 0
}
 
exports.help = {
        name: 'romen',
        description: 'Yazdığınız sayının romen karşılığını yazar.',
        usage: 'romen [sayı]'
}
   