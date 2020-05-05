module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Serverimize Hoşgeldin **' + username + '**! İyi Vakit Geçirmenizi Dileriz. :innocent: https://gph.is/2WaMTy7');
    member.guild.defaultChannel.send(''+username+'Aramıza Katıldı Hoşgeldin Kardeşim');
};
