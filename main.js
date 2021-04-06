const Discord = require('discord.js');

const setting = require('./setting.json');

const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`${client.user.tag}(으)로 로그인 완료!`);
    await client.user.setActivity('와 샌즈!', { type: "PLAYING" });
});

client.on('message', msg => {
    if(!msg.author.bot && msg.content.includes('와')) return msg.channel.send(`${msg.content.replace('와', '"와"')}\n\n???\n와?\n와 샌즈! 아시는구나!`);
});

client.login(setting.BOT_TOKEN);