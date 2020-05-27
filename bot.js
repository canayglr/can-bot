// Main Dosyası 

const express = require("express");
const http = require("http");
const app = express();

app.listen(process.env.PORT);
app.get("/", (request, response) => {
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 1000 * 60 * 3);

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const rando_espri = ['ÇaImak fiiIinin gelecek zamanı nedir? Hapse girmek','Geçen gün taksi çevirdim hala dönüyor','Adamın biri kızmış istemeye gelmişler','Funda Arar dediler ama hala daha aramadı','Adamın kafası atmış bacakları eşek','Geçen gün geçmiş günlerimi aradım ama meşguldü','Adamın birisi televizyona çıkmış bir daha indirememişler','Adamın biri gülmüş, saksıya koymuşlar','Sakla samanı, inekler aç kalsın','Adamın biri güneşte yanmış, ayda düz','Kediler niçin havaalanına gidemez? Çünkü pist var','Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi','Karar verdim 14 Şubatta bizim asansöre hediye alacağım. 10 yıldır çıkıyoruz daha birbirimiz hiç kırmadık',"Sinemada on dakika ara dedi, aradım aradım açmadı.",
"Röntgen Filmi çektirdik , yakında sinemalarda.","Yeni yapılmış resimlere ne denir?\n- **nev**resim","En ihtiyaç duyulan arı?\n- Baş**arı**","Gitarı getirde biraz şarkı söyleyelim.\n - Abi arı sokmasın ama?","Geçen bi taksi çevirdim. Hayla dönüyor.","Bugünler de gözlerim çok **kız**arıyor ya!\n- Valla bende arıyorum","Acıkan var mı beyler?\n- Yok abi tatlı kan var","İshal olmuş böceğe ne denir?\n- **CIRCIR** Böceği","Padişah tahta çıkınca ne yapmış?\n- Tahtayı yerine takmış","Tebrikler kazandınız, şimdi tencere oldunuz!","Kaba kuvvet uyguluma , kap kırılabilir.","Asker, adın ne?\n- Emre**dersiniz** komutanım!","Yahu sen nasıl bir kulsun?\n- Endoplazmik Reti**kul**um","Bizim CD sürücümüz ehliyeti nerden almış acaba ?","Ben hikaye yazarım, **Ebru Destan**","Yanii uzun lafın kısası, **U.L**","Ben arabayı kullanıyodum, Leonardo da Vinci","Mercedes namaz kılmıyor ama Renault **Clio**","Bebeğiniz oldu. Gözünüz aydın kulağınız manisa","Yılan'dan korkma, yılmayandan kork.","Denizaltı'nın bir üst modeli nedir?\n- Deniz**yedi**","Ben kahve içiyorum, **Nurgün Yeşilçay**","Bak şu karışıdaki uçak pisti, ama bir türlü temizlemediler.","Adamın biri kalemi yere atmış düşmemiş neden?\n- Çünkü pilot kalemmiş.","Derste çocuğun biri kalemini yemiş neden?\n- Çünkü dolma kalemmiş.","Yemeğin suyuna kim bandı?\n- Koli bandı.","İneklerin sevmediği element?\n- **Az**ot","Top ağlarda, ben ağlamaz mıyım?","Binanın biri **yanmış**, diğeri de **düz**.","Kadının biri güneşte **yanmış**, ay da **düz**.","Ben Yedigün içiyorum sen de Onbeşgün iç.","Türkiye'nin en yeni şehri neresidir?\n- **Nevşehir**","Türkiye'nin 1. ili hangisidir?\n- **Van**","Masa için hangi örtü kullanılmaz?\n- **Bitki Örtüsü**","Sana bir terlik yapıyım, terlerini koyarsın oraya.","Sana bi kıllık yapayım, kıllarını koyarsın","Rıdvan'ın bir büyüğünün ismi nedir?\n- Rıd**two**","Oğlumun adını **Mafya Babası** koyarsam mafya babası olmuş olur muyum?","Zenginler et, fakirler hayalet yer","**Seven** unutmaz olum **eight** unutur","Baraj dendi mi akan sular durur","Şeytan kapıyı nasıl çalar?\n- **Din** den dön!!","Ayda 9500TL Kazanmak İster misin??\n- Evet!!!\nO zaman Ay'a git. :)","Bana Funda Arar dediler ama hala daha aramadı.","Saç**malanmaz**. Saç, taranır.","Sinüs 60, Kosinüs tutmuş.","Yağmur **yağ**mış, kar peynir.","Eğer Dünya dönerse bende kebap!!","Bu erikson. Başka erik yok maalesef","Hoş**çakal**, Hoştilki.","Bill Gates neden grip olmuş?\n**Windows** açık kalmış da ondan…","Cem Uzan, üstüne örtiyim.","Otobüste otomatik kapıya yakın durmayın! Çarpar, böler, karekökünü alır."  
]
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.on('message', msg => {
  if (msg.channel.type !== 'dm') {
  var aslm = db.fetch(`slm_${msg.guild.id}`)
  if (aslm !== 'off') { 
  if (msg.content.toLowerCase() === 'sa') {
  setTimeout(() => {
          msg.react('688046882026684429');
      }, 1000);
        setTimeout(() => {
          msg.react('688046885088395275');
      }, 2000);
  }
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    setTimeout(() => {
          msg.react('688046882026684429');
      }, 1000);
        setTimeout(() => {
          msg.react('688046885088395275');
      }, 2000);
  }
  if (msg.content.toLowerCase() === 's.a') {
    setTimeout(() => {
          msg.react('688046882026684429');
      }, 1000);
        setTimeout(() => {
          msg.react('688046885088395275');
      }, 2000);
  }
  if (msg.content.toLowerCase() === 'selam') {

    setTimeout(() => {
          msg.react('688046882026684429');
      }, 1000);
        setTimeout(() => {
          msg.react('688046885088395275');
      }, 2000);
  }
  }
}
});
const ms = require("parse-ms");
client.on("message", async message => {
  
  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.content.includes(`${prefix}afk`)) return;
  
  if(await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    message.reply("Başarıyla afk modundan çıktınız <a:cantick:623582918203408384>");
  }
  
  var USER = message.mentions.users.first();
  if(!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);
  
  if(REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);
    //message.channel.send(`${USER.tag} kullanıcısı AFK\n AFK süresi: ${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s\nSebep:\n **${REASON}**` )
const afksuan = new Discord.RichEmbed()
                     .setColor("GREEN")
					 .setThumbnail("https://gifimage.net/wp-content/uploads/2017/09/afk-gif-3.gif")
                     .setDescription(`**${USER.tag}** Adlı Kullanıcı Şuanda AFK! \n\n**AFK Süresi:** \n${timeObj.hours} **saat** ${timeObj.minutes} **dakika** ${timeObj.seconds} **saniye** \n\n**Sebep:** \n\`\`${REASON}\`\``)
                     message.channel.send(afksuan).then(message => message.delete(8000));
  }
});
client.on('message', msg => {
   if (msg.content.toLowerCase() === ('espiri yap'|| 'espri yap' || '-espiri')) {
 		let embed = new Discord.RichEmbed()
 	  .setColor("RANDOM")
 	  .setTitle(rando_espri[Math.floor(Math.random() * rando_espri.length)])
    .setFooter(`Daha ${rando_espri.length} tane espirim var !`)
 		msg.channel.send(embed).then(embedMessage => {
 		embedMessage.react('😂');
 		embedMessage.react('🤢');
 		});
 		client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + msg.author.tag + " **espri yap** Komutunu Kullandı ! [" + msg.guild.name + "]");
 	}
});
client.on('guildCreate', guild => {
      client.guilds.get("710991177343827969").channels.get("713103839556796576").setName(`Toplam Kullanıcı: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
      client.guilds.get("710991177343827969").channels.get("713103858657656856").setName(`Toplam Sunucu: ${client.guilds.size.toLocaleString()}`);
});
client.on('guildDelete', guild => {
      client.guilds.get("710991177343827969").channels.get("713103839556796576").setName(`Toplam Kullanıcı: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
      client.guilds.get("710991177343827969").channels.get("713103858657656856").setName(`Toplam Sunucu: ${client.guilds.size.toLocaleString()}`);
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === ('<@!536627383743283230>' || '<@536627383743283230>')) {
        if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
            msg.channel.sendMessage('***<a:kedi:601758379693572126> Efendim Dostum ? Neler Yapabileceğim Hakkında Bilgi Almak İstiyorsan `-yardım`***'); 
        } else {
        msg.channel.send('***<a:havali:601758375906377738> Emret Reis ? Neler Yapabileceğim Hakkında Bilgi Almak İstiyorsan `-yardım`***');
        }
    }
  });

 client.on('guildCreate', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("BLUE")
.setTitle(":inbox_tray: | Botumuzu Ekledi xD")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
.setThumbnail("https://cdn.discordapp.com/emojis/601758526523703296.gif?v=1")

   client.guilds.get('537614145982562314').channels.get('597069498306265089').send(rrrsembed); 
  
});

client.on('guildDelete', guild => {

let rrrsembed = new Discord.RichEmbed()

.setColor("RED")
.setTitle(":outbox_tray: | Botumuzu Kickledi :( ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
.setThumbnail("https://cdn.discordapp.com/emojis/601758542722105375.gif?v=1")

   client.guilds.get('537614145982562314').channels.get('597069498306265089').send(rrrsembed); 
});
client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const dmlog = new Discord.RichEmbed()
         .setTitle(`${client.user.username}' Botunuza Gönderilern Mesaj`)
         .setColor('00000')
         .addField('Mesajı Gönderen',` \`\`\` ${message.author.tag} \`\`\` `)
         .addField('Mesajı Gönderenin ID', ` \`\`\`${message.author.id}\`\`\` `)
         .addField(`Gönderilen Mesaj`, message.content)
         .setThumbnail(message.author.avatarURL) 
    client.channels.get("645257257470132224").send(dmlog);
    }
/*client.on('guildCreate', async guild => {
  let girdim = await db.fetch(`girdm_${guild.id}`);
  if (girdim === 1) return
  if (girdim === null) {
  const girismesaj = new Discord.RichEmbed()
         .setColor('RANDOM')
         //.setThumbnail("https://cdn.discordapp.com/attachments/537167775555125249/603990589234741269/ezgif.com-gif-maker.gif")
         .addField(`Merhaba Dostum !`,`Beni Sunucuna Eklediğin İçin Teşekkür Ederim !`)
         .addField(`\`「 ${guild.name} 」 Hizmete Hazırım !\``,`\`\`\`🌺 Sana Biraz Kendimi Tanıtmak İstiyorum , Ben Bir Eğlence Botuyum Ve Sunucunu Daha Eğlenceli Bir Hale Getirmek İçin Programlandım ! Diğer Botlardan Farkım Daha Özgün Komutlarım Olmasıdır , Ne Duruyorsun ? -yardım Yazarak Komutları Görebilirsin !\`\`\``)
         .setThumbnail(client.user.avatarURL)
         .setFooter("Bir Önerin Varsa -öneri İle Bize Bildirebilirsin !")
         //.setAuthor(`${guild.name} Hizmete Hazırım !`)
  guild.owner.send(girismesaj)
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`)
  db.set(`girdm_${guild.id}`, 1)};
})*/
});
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
client.login(ayarlar.token);

// SERVER
client.on('raw', packet => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
  const channel = client.channels.get(packet.d.channel_id);
  if (channel.messages.has(packet.d.message_id)) return;
  channel.fetchMessage(packet.d.message_id).then(message => {
      const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
      const reaction = message.reactions.get(emoji);
      if (reaction) reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id));
      if (packet.t === 'MESSAGE_REACTION_ADD') client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
      if (packet.t === 'MESSAGE_REACTION_REMOVE') client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id));
  });
});
// Yukarıdaki kısıma ellemeyin, sadece aşağıdaki yerleri doldurun. İstediğiniz gibi emojileri ve mesajları çoğaltabilirsiniz.

client.on("messageReactionAdd", (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (!user || user.bot || !message.channel.guild) return;
  if (message.id === "710996763510702091" && emoji.id === "603193080656429069") {
message.guild.member(user).addRoles(["710993745008656435"]);
user.send(new Discord.RichEmbed().setDescription("`Can-Bot` Rolün Başarıyla Verildi ! \nDestek alabilmek için **!destek** yazabilir veya ses kanalına girip yetkilileri çağırabilirsin !").setColor("RANDOM"))
  }
if (message.id === "710996763510702091" && emoji.id === "601758360198709259") {
message.guild.member(user).addRoles(["710993848712822915"]);
user.send(new Discord.RichEmbed().setDescription("`Çekiliş` Rolün Başarıyla Verildi ! \nDestek alabilmek için **!destek** yazabilir veya ses kanalına girip yetkilileri çağırabilirsin !").setColor("RANDOM"))
  }
});
client.on("messageReactionRemove", (reaction, user) => {
  let message = reaction.message, emoji = reaction.emoji;
  if (!user || user.bot || !message.channel.guild) return;
  if (message.id === "710996763510702091" && emoji.id === "603193080656429069") message.guild.member(user).removeRoles(["710993745008656435"]);
  if (message.id === "710996763510702091" && emoji.id === "601758360198709259") message.guild.member(user).removeRoles(["710993848712822915"]);
});