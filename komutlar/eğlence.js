const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const client = new Discord.Client();
const reactionrem = require('discord.js-remove-on-reaction')

var prefix = ayarlar.prefix;

client.on("messageReactionAdd", (reaction, user) => {
    reaction.remove(user).then(reaction => {});
});
exports.run = async (client, message, args, tools) => {
	let pages = ['Sayfa 1', 'Sayfa 2']
	let page = 1

	const embed = new Discord.RichEmbed()
		.setTitle(`**Sayfa ${page} of ${pages.length}**`)
		.setAuthor('• EĞLENCE KOMUTLARI •')
		.setDescription('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑\n**• -hackle** <:canright:603301130730078219> Bulunduğunuz Sunucuyu Haçklersiniz\n\n**• -ilginçbilgi** <:canright:603301130730078219> İlginç Bilgiler Öğrenmeye Hazırmısın ?\n\n**• -boğ** <:canright:603301130730078219> Belirlenen Kullanıcıyı Boğarsın\n\n**• -hesapla** <:canright:603301130730078219> Belirtilen İşlemi Yapar\n\n**• -headshot** <:canright:603301130730078219> Belirtilen Kişinin Kafasına Sıkar.\n\n**• -fakemesaj** <:canright:603301130730078219> İstediğiniz Bir Mesajı Seçtiğiniz Kişiye Yazdırır\n\n**• -post** <:canright:603301130730078219> Rastgele Eğlenceli Postlar Gösterir\n\n**• -tokatla** <:canright:603301130730078219> Belirlenen Kişiyi Bi Güzel Tokatlar !\n\n**• -kafaat** <:canright:603301130730078219> Belirlenen Kişiye Bir Kafa Geçirirsiniz !\n\n**• -kişiliktesti** <:canright:603301130730078219> Eğlenceli Bir Kişilik Testi Yapar\n\n๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑')
		.setFooter("Botumuza Her Geçen Gün Yeni Özellikler Eklenmektedir")
		.setThumbnail("https://cdn.discordapp.com/avatars/536627383743283230/1a70d569e19d849b90901071bd0bcdc5.png?size=2048")
		.setColor(0xff8000)
	message.channel.send(embed).then(msg => {

		msg.react('603302356280672273').then( r => {
			msg.react('603302298273316890')


			const backwardsFilter = (reaction, user) => reaction.emoji.id === '603302356280672273' && user.id === message.author.id;
			const forwardsFilter = (reaction, user) => reaction.emoji.id === '603302298273316890' && user.id === message.author.id;

			const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
			const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setTitle(`**Sayfa ${page} of ${pages.length}**`)
				embed.setAuthor('• EĞLENCE KOMUTLARI •')
				embed.setDescription('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑\n**• -hackle** <:canright:603301130730078219> Bulunduğunuz Sunucuyu Haçklersiniz\n\n**• -ilginçbilgi** <:canright:603301130730078219> İlginç Bilgiler Öğrenmeye Hazırmısın ?\n\n**• -boğ** <:canright:603301130730078219> Belirlenen Kullanıcıyı Boğarsın\n\n**• -hesapla** <:canright:603301130730078219> Belirtilen İşlemi Yapar\n\n**• -headshot** <:canright:603301130730078219> Belirtilen Kişinin Kafasına Sıkar.\n\n**• -fakemesaj** <:canright:603301130730078219> İstediğiniz Bir Mesajı Seçtiğiniz Kişiye Yazdırır\n\n**• -post** <:canright:603301130730078219> Rastgele Eğlenceli Postlar Gösterir\n\n**• -tokatla** <:canright:603301130730078219> Belirlenen Kişiyi Bi Güzel Tokatlar !\n\n**• -kafaat** <:canright:603301130730078219> Belirlenen Kişiye Bir Kafa Geçirirsiniz !\n\n**• -kişiliktesti** <:canright:603301130730078219> Eğlenceli Bir Kişilik Testi Yapar\n\n๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑')
				embed.setFooter("Botumuza Her Geçen Gün Yeni Özellikler Eklenmektedir")
				embed.setThumbnail("https://cdn.discordapp.com/avatars/536627383743283230/1a70d569e19d849b90901071bd0bcdc5.png?size=2048")
				embed.setColor(0xff8000)
				msg.edit(embed)


			})

			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setTitle(`Sayfa ${page} of ${pages.length}`);
				embed.setAuthor('• EĞLENCE KOMUTLARI •')
				embed.setDescription('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑\n**• -emojim** <:canright:603301130730078219> Sizin için rastgele bir emoji gönderir !\n\n**• -molotof** <:canright:603301130730078219> İstediğin Kişinin Kafasına Molotof Atarsın !\n\n**• -stresçarkı** <:canright:603301130730078219> Sizin için bir stres çarkı çevirir.\n\n**• -sik** <:canright:603301130730078219> Dene Ve Gör :wink:\n\n**• -yazıtura** <:canright:603301130730078219> Yazı-Tura atar.\n\n**• -zekaölç** <:canright:603301130730078219> Zekanızı Ölçmeye Yarar !\n\n**• -sarıl** <:canright:603301130730078219> Belirlenen Kişiye Sarılırsınız !\n\n**• -öp** <:canright:603301130730078219> Belirlenen Kişiyi Öpersiniz !\n\n**• espiri yap** <:canright:603301130730078219> Birbirinden Soğuk Espiriler Yapar !\n\n**• -füze** <:canright:603301130730078219> Belirlenen Kişiye Füze Gönderir !\n\n**• -dönüşüm** <:canright:603301130730078219> Sizi Rastgele Bir Ben10 Karakterine Çevirir !\n\n**• -inek** <:canright:603301130730078219> İneğe İstediğiniz Şeyi Yazdırır !\n\n๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑')
				embed.setFooter("Botumuza Her Geçen Gün Yeni Özellikler Eklenmektedir")
				embed.setThumbnail("https://cdn.discordapp.com/avatars/536627383743283230/1a70d569e19d849b90901071bd0bcdc5.png?size=2048")
				embed.setColor(0xff8000)
				msg.edit(embed)

			})

		})

	})






//▶️◀️











//`



};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlencebilgi','eğlenceyardım','yardımeğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence Komutlarını Gösterir',
  usage: 'eğlence'
};
