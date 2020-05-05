const Discord = require('discord.js')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
	if(!args[0]) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen Bir Sayı Yazın!`)
			.setColor('RANDOM')
			.setTimestamp()
      .setFooter("Sayaç Hakkında Bilgi Almak İçin -sayaçbilgi")
		message.channel.send({embed})
		return
	}

	let profil = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));

	if(args[0] === "sıfırla") {
		if(!profil[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Ayarlanmayan Şeyi Sıfırlayamazsın!`)
				.setColor('RANDOM')
				.setTimestamp()
        .setFooter("Sayaç Hakkında Bilgi Almak İçin -sayaçbilgi")
			message.channel.send({embed})
			return
		}
		delete profil[message.guild.id].sayi
		delete profil[message.guild.id]
		fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`Sayaç başarıyla sıfırlandı!`)
			.setColor('RANDOM')
			.setTimestamp()
      .setFooter("Sayaç Hakkında Bilgi Almak İçin -sayaçbilgi")
		message.channel.send({embed})
		return
	}
	/*if(args[0] <= 1) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Oyuncu Sayımız **${args[0]}** Kişiye Ulaştı Lütfen Sayacı Tekrar Ayarlayınız !`)
			.setColor('RANDOM')
			.setTimestamp()
      .setFooter("Sayaç Hakkında Bilgi Almak İçin -sayaçbilgi")
		message.channel.send({embed})
		return
  }
	*/
	if(isNaN(args[0])) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen Bir Sayı Yazın!`)
			.setColor('RANDOM')
			.setTimestamp()
      .setFooter("Sayaç Hakkında Bilgi Almak İçin -sayaçbilgi")
		message.channel.send({embed})
		return
	}

	if(args[0] <= message.guild.members.size) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen Sunucu Sayısından **[${message.guild.members.size}]** Daha Yüksek Bir Değer Girin!`)
			.setColor('RANDOM')
			.setTimestamp()
      .setFooter("Sayaç Hakkında Bilgi Almak İçin -sayaçbilgi")
		message.channel.send({embed})
		return
	}

	if(!profil[message.guild.id]){
		profil[message.guild.id] = {
			sayi: args[0]
		};
	}

	profil[message.guild.id].sayi = args[0]

	fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
		console.log(err)
	})

	const embed = new Discord.RichEmbed()
		.setDescription(`Sayaç Başarıyla **${args[0]}** Olarak Ayarlandı!
**NOT: Çalışması İçin Lütfen Sayaç İsminde Bir Kanal Açın** `)
		.setColor('RANDOM')
		.setTimestamp()
    .setFooter("Sayaç Hakkında Bilgi Almak İçin -sayaçbilgi")
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sayaçayarla', 'sayac', 'sayaç'],
	permLevel: 2
}

exports.help = {
	name: 'sayaç',
	description: 'Sayacı ayarlar.',
	usage: 'sayaç [sayı/sıfırla]'
}
