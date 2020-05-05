const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"YAZI-TURA:**__TURA__**",
	"YAZI-TURA:**__YAZI__**"
];

exports.run = function(client, message) {

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	if (cevap === "YAZI-TURA:**__YAZI__**") {
	const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://i.hizliresim.com/BOLmyV.png")	
    message.channel.send("Para Atılıyor <a:loading:605083580414033929>").then(async message => {
                  setTimeout(() => {
          message.edit('Para Atılıyor <a:loading:605083580414033929>');
      }, 1000);
        setTimeout(() => {
          message.edit('https://www.gifmania.com.tr/Hareketli-Gifler-Nesneler/Gif-Resimleri-Para/Animasyonlar-Euro/Euro-Madeni-Paralar/Euro-Madeni-Paralar-88503.gif');
      }, 2000);
        setTimeout(() => {
          message.edit('https://www.gifmania.com.tr/Hareketli-Gifler-Nesneler/Gif-Resimleri-Para/Animasyonlar-Euro/Euro-Madeni-Paralar/Euro-Madeni-Paralar-88503.gif');
      }, 3000);
        setTimeout(() => {
          message.edit(embedyazı);
      }, 4000);
    });
	} else if (cevap === "YAZI-TURA:**__TURA__**") {

		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png")
		message.channel.send("Para Atılıyor <a:loading:605083580414033929>").then(async message => {
                  setTimeout(() => {
          message.edit('Para Atılıyor <a:loading:605083580414033929>');
      }, 1000);
        setTimeout(() => {
          message.edit('https://www.gifmania.com.tr/Hareketli-Gifler-Nesneler/Gif-Resimleri-Para/Animasyonlar-Euro/Euro-Madeni-Paralar/Euro-Madeni-Paralar-88503.gif');
      }, 2000);
        setTimeout(() => {
          message.edit('https://www.gifmania.com.tr/Hareketli-Gifler-Nesneler/Gif-Resimleri-Para/Animasyonlar-Euro/Euro-Madeni-Paralar/Euro-Madeni-Paralar-88503.gif');
      }, 3000);
        setTimeout(() => {
          message.edit(embedtura);
      }, 4000);
    });

	}


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};
