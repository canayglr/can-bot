const ayarlar = require('../ayarlar.json');
let beklemeSuresi = new Set();
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
if (beklemeSuresi.has(message.author.id)) return message.reply('Bu komutu kullanabilmek için **2 saniye** beklemelisin !');
    beklemeSuresi.add(message.author.id);
    setTimeout(() => { beklemeSuresi.delete(message.author.id); }, 2000);
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
