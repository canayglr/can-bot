const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Bu Komudu Kullanmak İçin ``Mesajları Yönet`` Yetkiniz Olmalıdır !');
  if(!tomute) return message.reply("Kullanıcı Bulunamadı !");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Kişiyi Susturamazsın !");
  let muterole = message.guild.roles.find(`name`, "Susturuldu");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Susturuldu",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Bir Zaman Belirtmediniz !");

  await(tomute.addRole(muterole.id));
  /*const bitti = new Discord.RichEmbed()
  .setColor(0xe80000)
  .setTitle(`**[** <@${tomute.id}> **]** Adlı Kullanıcı ${ms(ms(mutetime))} Kadar Susturuldu !`)
  .setFooter("CAN Güvenlik Sistemleri")
  message.channel.send(bitti);*/
  message.channel.send(`<@${tomute.id}> Adlı Kullanıcı ${ms(ms(mutetime))} Kadar Susturuldu !`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    /*const bitti = new Discord.RichEmbed()
    .setColor(0xe80000)
    .setTitle(`<@${tomute.id}> Adlı Oyuncunun Susturması Kaldırıldı !`)
    .setFooter("CAN Güvenlik Sistemleri")
    message.channel.send(bitti);*/
    message.channel.send(`<@${tomute.id}> Adlı Oyuncunun Susturması Kaldırıldı !`);
  }, ms(mutetime));


//end of module
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mute'],
  permLevel: 3
};

exports.help = {
  name: 'sustur',
  description: 'Oyuncuyu Susturur',
  usage: 'sustur'
};
