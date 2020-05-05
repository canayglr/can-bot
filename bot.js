const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const rando_espri = [
'ÇaImak fiiIinin gelecek zamanı nedir? Hapse girmek.',
'Geçen gün taksi çevirdim hala dönüyor.',
'Adamın biri kızmış istemeye gelmişler.',
'Funda Arar dediler ama hala daha aramadı.',
'Adamın kafası atmış bacakları eşek.',
'Geçen gün geçmiş günlerimi aradım ama meşguldü.',
'Adamın birisi televizyona çıkmış bir daha indirememişler.',
'Adamın biri gülmüş, saksıya koymuşlar.',
'Sakla samanı, inekler aç kalsın.',
'Adamın biri güneşte yanmış, ayda düz.',
'Kediler niçin havaalanına gidemez? Çünkü pist var.',
'Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.',
'Karar verdim 14 Şubatta bizim asansöre hediye alacağım. 10 yıldır çıkıyoruz daha birbirimiz hiç kırmadık.',
    "Sinemada on dakika ara dedi, aradım aradım açmadı.",
    "Röntgen Filmi çektirdik , yakında sinemalarda.",
    "Yeni yapılmış resimlere ne denir?\n- **nev**resim",
    "En ihtiyaç duyulan arı?\n- Baş**arı**",
    "Gitarı getirde biraz şarkı söyleyelim.\n - Abi arı sokmasın ama?",
    "Geçen bi taksi çevirdim. Hayla dönüyor.",
    "Bugünler de gözlerim çok **kız**arıyor ya!\n- Valla bende arıyorum",
    "Acıkan var mı beyler?\n- Yok abi tatlı kan var",
    "İshal olmuş böceğe ne denir?\n- **CIRCIR** Böceği",
    "Padişah tahta çıkınca ne yapmış?\n- Tahtayı yerine takmış",
    "Tebrikler kazandınız, şimdi tencere oldunuz!",
    "Kaba kuvvet uyguluma , kap kırılabilir.",
    "Asker, adın ne?\n- Emre**dersiniz** komutanım!",
    "Yahu sen nasıl bir kulsun?\n- Endoplazmik Reti**kul**um",
    "Bizim CD sürücümüz ehliyeti nerden almış acaba ?",
    "Ben hikaye yazarım, **Ebru Destan**",
    "Yanii uzun lafın kısası, **U.L**",
    "Ben arabayı kullanıyodum, Leonardo da Vinci",
    "Mercedes namaz kılmıyor ama Renault **Clio**",
    "Bebeğiniz oldu. Gözünüz aydın kulağınız manisa",
    "Yılan'dan korkma, yılmayandan kork.",
    "Denizaltı'nın bir üst modeli nedir?\n- Deniz**yedi**",
    "Ben kahve içiyorum, **Nurgün Yeşilçay**",
    "Bak şu karışıdaki uçak pisti, ama bir türlü temizlemediler.",
    "Adamın biri kalemi yere atmış düşmemiş neden?\n- Çünkü pilot kalemmiş.",
    "Derste çocuğun biri kalemini yemiş neden?\n- Çünkü dolma kalemmiş.",
    "Yemeğin suyuna kim bandı?\n- Koli bandı.",
    "İneklerin sevmediği element?\n- **Az**ot",
    "Top ağlarda, ben ağlamaz mıyım?",
    "Binanın biri **yanmış**, diğeri de **düz**.",
    "Kadının biri güneşte **yanmış**, ay da **düz**.",
    "Ben Yedigün içiyorum sen de Onbeşgün iç.",
    "Türkiye'nin en yeni şehri neresidir?\n- **Nevşehir**",
    "Türkiye'nin 1. ili hangisidir?\n- **Van**",
    "Masa için hangi örtü kullanılmaz?\n- **Bitki Örtüsü**",
    "Sana bir terlik yapıyım, terlerini koyarsın oraya.",
    "Sana bi kıllık yapayım, kıllarını koyarsın",
    "Rıdvan'ın bir büyüğünün ismi nedir?\n- Rıd**two**",
    "Oğlumun adını **Mafya Babası** koyarsam mafya babası olmuş olur muyum?",
    "Zenginler et, fakirler hayalet yer",
    "**Seven** unutmaz olum **eight** unutur",
    "Baraj dendi mi akan sular durur",
    "Şeytan kapıyı nasıl çalar?\n- **Din** den dön!!",
    "Ayda 9500TL Kazanmak İster misin??\n- Evet!!!\nO zaman Ay'a git. :)",
    "Bana Funda Arar dediler ama hala daha aramadı.",
    "Saç**malanmaz**. Saç, taranır.",
    "Sinüs 60, Kosinüs tutmuş.",
    "Yağmur **yağ**mış, kar peynir.",
    "Eğer Dünya dönerse bende kebap!!",
    "Bu erikson. Başka erik yok maalesef",
    "Hoş**çakal**, Hoştilki.",
    "Bill Gates neden grip olmuş?\n**Windows** açık kalmış da ondan…",
    "Cem Uzan, üstüne örtiyim.",
    "Otobüste otomatik kapıya yakın durmayın! Çarpar, böler, karekökünü alır."
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
  let sa = db.fetch(`as_${msg.guild.id}`)
  if (sa === '1') return
  if (sa === null) {
  if (msg.content.toLowerCase() === 'sa') {
	if (msg.author.id === '384296034521579520') {
    msg.reply('Aleyküm Selam Hoşgeldin Sefalar Getirdin Değerli Babam 👑 !');
	msg.react("👑");
	}else
  setTimeout(() => {
          msg.react('688046882026684429');
      }, 1000);
        setTimeout(() => {
          msg.react('688046885088395275');
      }, 2000);
  }
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
	if (msg.author.id === '384296034521579520') {
    msg.reply('Aleyküm Selam Hoşgeldin Sefalar Getirdin Değerli Babam 👑 !');
	msg.react("👑");
	}else
    setTimeout(() => {
          msg.react('688046882026684429');
      }, 1000);
        setTimeout(() => {
          msg.react('688046885088395275');
      }, 2000);
  }
  if (msg.content.toLowerCase() === 's.a') {
    if (msg.author.id === '384296034521579520') {
    msg.reply('Aleyküm Selam Hoşgeldin Sefalar Getirdin Değerli Babam 👑 !');
	msg.react("👑");
	}else
    setTimeout(() => {
          msg.react('688046882026684429');
      }, 1000);
        setTimeout(() => {
          msg.react('688046885088395275');
      }, 2000);
  }
  if (msg.content.toLowerCase() === 'selam') {
    if (msg.author.id === '384296034521579520') {
    msg.reply('Aleyküm Selam Hoşgeldin Sefalar Getirdin Değerli Babam 👑 !');
  msg.react("👑");
  }else
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
client.on("message", message => {

//var i = db.fetch(`prefix_${message.guild.id}`)

  
    let afk_kullanici = message.mentions.users.first() || message.author;
    //let guildim = db.fetch(`guild_${message.guild.id}`);
    if(message.content.startsWith(ayarlar.prefix+"afk")) return; 
 if (message.author.bot === true) return;
   

     if(message.content.includes(`<@${afk_kullanici.id}>`))
        //if(message.guild.id === `${db.fetch(`guild_${message.guild.id}`)}`) {
         if(db.has(`afks_${afk_kullanici.id}`)) {
             const afksuan = new Discord.RichEmbed()
                     .setColor("GREEN")
					 .setThumbnail("https://gifimage.net/wp-content/uploads/2017/09/afk-gif-3.gif")
                     .setDescription(`**${client.users.get(afk_kullanici.id).tag}** Adlı Kullanıcı Şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
                     message.channel.send(afksuan).then(message => message.delete(8000));
         }
        // if(message.guild.id === guildim) {
         if(db.has(`afks_${message.author.id}`)) {
                        let user = message.member

             const basarili = new Discord.RichEmbed()

                 .setColor("RED")
                 .setDescription("<@"+`${message.author.id}`+">"+"**Başarıyla AFK Modundan Çıktın <a:cantick:623582918203408384>**")

                              //user.setNickname(message.author.nickname)

                message.channel.send(basarili).then(message => message.delete(8000));
              /*let userla = db.fetch(`userim_${message.guild.id}`);
              user.setNickname(userla)*/
             db.delete(`afks_${message.author.id}`)
         }

       });


client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'otorol') {
    client.guilds.get("537614145982562314").channels.get("537632322225438731").send("" + msg.author.tag + " **-otorol** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'otorolbilgi') {
    client.guilds.get("537614145982562314").channels.get("537632322225438731").send("" + msg.author.tag + " **-otorolbilgi** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'otomesajkapat') {
    client.guilds.get("537614145982562314").channels.get("537632322225438731").send("" + msg.author.tag + " **-otomesajkapat** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'otorolmesajkapat') {
    client.guilds.get("537614145982562314").channels.get("537632322225438731").send("" + msg.author.tag + " **-otorolmesajkapat** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'otorolsıfırla') {
    client.guilds.get("537614145982562314").channels.get("537632322225438731").send("" + msg.author.tag + " **-otorolsıfırla** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'otorol-ayarla') {
    client.guilds.get("537614145982562314").channels.get("537632322225438731").send("" + msg.author.tag + " **-otorol-ayarla** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'otorolbilgi') {
    client.guilds.get("537614145982562314").channels.get("537632322225438731").send("" + msg.author.tag + " **-otorolbilgi** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'post') {
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + msg.author.tag + " **-post** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'stresçarkı') {
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + msg.author.tag + " **-stresçarkı** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'yazıtura') {
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + msg.author.tag + " **-yazıtura** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'hackle') {
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + msg.author.tag + " **-hackle** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'yaz') {
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + msg.author.tag + " **-yaz** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'atasözü') {
    client.guilds.get("537614145982562314").channels.get("537707761908056064").send("" + msg.author.tag + " **-atasözü** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'bilgilerim') {
    client.guilds.get("537614145982562314").channels.get("538331274184622081").send("" + msg.author.tag + " **-bilgilerim** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'sunucubilgi') {
    client.guilds.get("537614145982562314").channels.get("538331274184622081").send("" + msg.author.tag + " **-sunucubilgi** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
  if (msg.content.toLowerCase() === prefix + 'istatistik') {
    client.guilds.get("537614145982562314").channels.get("538331274184622081").send("" + msg.author.tag + " **-istatistik** Komutunu Kullandı ! [" + msg.guild.name + "]");
  }
   /*var guildID = "539157355888377866";
   var channelID = "539171859498008576";
   if (msg.channel.id === '539374244094803988') {
     if (msg.content.toLowerCase() === 'kaydol') {
       var role = msg.guild.roles.find(role => role.name === "Üyeler");
       var role2 = msg.guild.roles.find(role => role.name === "Yeni Üye");
       msg.member.addRole(role);
       msg.member.removeRole(role2);
       msg.delete()
       client.guilds.get(guildID).channels.get(channelID).send("**" + msg.author.tag + "** Üyeler Rolü Verildi.");
     }
   }*/
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
      client.guilds.get("537614145982562314").channels.get("538110987270619163").setName(`Toplam Kullanıcı: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
      client.guilds.get("537614145982562314").channels.get("538313681662902282").setName(`Toplam Sunucu: ${client.guilds.size.toLocaleString()}`);
      client.guilds.get("537614145982562314").channels.get("538313759291080724").setName(`Toplam Kanal: ${client.channels.size.toLocaleString()}`);
});
client.on('guildDelete', guild => {
      client.guilds.get("537614145982562314").channels.get("538110987270619163").setName(`Toplam Kullanıcı: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
      client.guilds.get("537614145982562314").channels.get("538313681662902282").setName(`Toplam Sunucu: ${client.guilds.size.toLocaleString()}`);
      client.guilds.get("537614145982562314").channels.get("538313759291080724").setName(`Toplam Kanal: ${client.channels.size.toLocaleString()}`);
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
.setTitle(":inbox_tray:| Botumuzu Ekledi xD")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

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
