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
		.setAuthor('• KULLANICI KOMUTLARI •')
		.setDescription('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑\n**• -çek** <:canright:603301130730078219> Etiketlediğiniz Kullanıcıyı Yanınıza Çekmeyi Sağlar\n\n**• -git** <:canright:603301130730078219> Etiketlediğiniz Kullanıcının Yanına Gitmenizi Sağlar\n\n**• -rolsay** <:canright:603301130730078219> Bulunduğunuz Sunucudaki Rolleri ve Üye Sayısını Sıralar\n\n**• -emoji-göster** <:canright:603301130730078219> Seçtiğiniz Emoji Hakkında Bilgi Verir\n\n**• -avatar** <:canright:603301130730078219> Sizin Veya Başkasının Avatarını Görmeye Yarar\n\n**• -namaz** <:canright:603301130730078219> Seçtiğiniz Şehrin Namaz Saatlerini Gösterir\n\n**• -bilgi** <:canright:603301130730078219> Bot ile ilgili bilgi verir.\n\n**• -davet** <:canright:603301130730078219> Botun davet linkini gönderir.\n\n**• -id** <:canright:603301130730078219> Bir Kullanıcının ID Sini Bulmaya Yarar\n\n**• -istatistik** <:canright:603301130730078219> Botun istatistik gösterir.\n\n**• -öner** <:canright:603301130730078219> Bot Hakkındaki Önerilerinizi Yetkililere Ulaştırır\n\n๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑')
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
				embed.setAuthor('• KULLANICI KOMUTLARI •')
		    embed.setDescription('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑\n**• -çek** <:canright:603301130730078219> Etiketlediğiniz Kullanıcıyı Yanınıza Çekmeyi Sağlar\n\n**• -git** <:canright:603301130730078219> Etiketlediğiniz Kullanıcının Yanına Gitmenizi Sağlar\n\n**• -rolsay** <:canright:603301130730078219> Bulunduğunuz Sunucudaki Rolleri ve Üye Sayısını Sıralar\n\n**• -emoji-göster** <:canright:603301130730078219> Seçtiğiniz Emoji Hakkında Bilgi Verir\n\n**• -avatar** <:canright:603301130730078219> Sizin Veya Başkasının Avatarını Görmeye Yarar\n\n**• -namaz** <:canright:603301130730078219> Seçtiğiniz Şehrin Namaz Saatlerini Gösterir\n\n**• -bilgi** <:canright:603301130730078219> Bot ile ilgili bilgi verir.\n\n**• -davet** <:canright:603301130730078219> Botun davet linkini gönderir.\n\n**• -id** <:canright:603301130730078219> Bir Kullanıcının ID Sini Bulmaya Yarar\n\n**• -istatistik** <:canright:603301130730078219> Botun istatistik gösterir.\n\n**• -öner** <:canright:603301130730078219> Bot Hakkındaki Önerilerinizi Yetkililere Ulaştırır\n\n๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑')
				embed.setFooter("Botumuza Her Geçen Gün Yeni Özellikler Eklenmektedir")
				embed.setThumbnail("https://cdn.discordapp.com/avatars/536627383743283230/1a70d569e19d849b90901071bd0bcdc5.png?size=2048")
				embed.setColor(0xff8000)
				msg.edit(embed)


			})

			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setTitle(`Sayfa ${page} of ${pages.length}`);
				embed.setAuthor('• KULLANICI KOMUTLARI •')
				embed.setDescription('๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑\n**• -bilgilerim** <:canright:603301130730078219> Komutu kullanan kişi hakkında bilgi verir.\n\n**• -songörülme** <:canright:603301130730078219> Kullanıcının Son Görülmesini Gösterir BETA \n\n**• -instagram** <:canright:603301130730078219> Yazılan İnstagram Hakkında Bilgi Verir \n\n**• -afk** <:canright:603301130730078219> Hey Dostum Ordamısın ?\n\n**• -yetkilerim** <:canright:603301130730078219> Bulunduğunuz Sunucudaki Yetkilerinizi Gösterir.\n\n**• -sunucuresmi** <:canright:603301130730078219> Bulunduğunuz Sunucunun Resmini Atar\n\n**• -say** <:canright:603301130730078219> Bulunduğunuz Sunucudaki Aktifliği Atar\n\n**• -sunucubilgi** <:canright:603301130730078219> Sunucu hakkında bilgi verir.\n\n**• -yaz** <:canright:603301130730078219> İstediğiniz şeyi bota yazdırır. !\n\n**• -havadurumu** <:canright:603301130730078219> İllerin Hava Durumunu Hesaplar\n\n๑ ▬▬▬▬▬▬▬▬▬▬~ஜ۩۞۩ஜ~▬▬▬▬▬▬▬▬▬▬▬­­­­­­­­­ ๑')
				embed.setFooter("Botumuza Her Geçen Gün Yeni Özellikler Eklenmektedir")
				embed.setThumbnail("https://cdn.discordapp.com/avatars/536627383743283230/1a70d569e19d849b90901071bd0bcdc5.png?size=2048")
				embed.setColor(0xff8000)
				msg.edit(embed)

			})

		})

	})






//▶️◀️











//`


client.guilds.get("537614145982562314").channels.get("537707761908056064").sendMessage("" + message.author.tag + "** " + exports.help.name + "** Komutunu Kullandı ! [" + message.guild.name + "]");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcıbilgi','kullanıcıyardım','yardımkullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı Komutlarını Gösterir',
  usage: 'kullanıcı'
};
