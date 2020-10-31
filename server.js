require("express")().listen(1343);

const db = require("quick.db"); 
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });//ukqzn
client.login("NzcyMDg2MzcyNzE4MDg0MTI3.X51jdw.IhVWorlcYTMFAmKvl_b_l-sJcE4");
const fetch = require("node-fetch");
const fs = require('fs')//ukqzn

setInterval(() => {
  var links = db.get("linkler");
  if(!links) return 
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Başarıyla Pinglendi.")
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}//ukqzn
})

client.on("ready", () => {
  client.user.setActivity(`u!yardım | u!ekle`, { url: 'https://twitch.tv/ardacan1888', type: 'STREAMING' });
  console.log(`Logined`)
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "u!ekle") {

  let embed10 = new Discord.RichEmbed()
        .setAuthor(`==================================`)
        .setColor('#ffff00')
        .setTitle("<a:hayr:770352436636155934>  Bu komutu botun özelinde **kullanmalısın!**")
        .setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
        .setDescription(`==================================`)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()

    message.delete();
        if (message.channel.type !== "dm") return message.channel.send(embed10)
  let embed1 = new Discord.RichEmbed()
        .setAuthor(`==================================`)
        .setColor('#ffff00')
        .setTitle("**Link Sistemde Zaten Bulunuyor. <a:hayr:770352436636155934>**")
        .setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
        .setDescription(`==================================`)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
var link = spl[1]//ukqzn
  fetch(link).then(() => {//ukqzn
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send(embed1)
    
    let yardım = new Discord.RichEmbed()//ukqzn
        .setAuthor(`==================================`)
        .setColor('#ffff00')
        .setTitle("**Tebrikler Artık Botunuz 7/24 ! Yazdığnız URL Başarıyla Eklendi. <a:onay:756097883383791667>**")
        .setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
        .setDescription(`==================================`)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
     message.channel.send(yardım)
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let yardım2 = new Discord.RichEmbed()//ukqzn
        .setAuthor(`==================================`)
        .setColor('#ffff00')
        .setTitle("**Lütfen Bir URL Girin. <a:hayr:770352436636155934>\n\n Hata: **" + e)
        .setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
        .setDescription(`==================================`)
        .setTimestamp()
   return message.channel.send(yardım2)
  })//ukqzn
  }
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "u!botsay") {
  var link = spl[1]
 message.channel.send(`<a:up12:772083038317445130>  Toplam \`${db.get("linkler").length}\` bot **aktif tutuluyor!**`)//ukqzn
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "u!yardım") {
let embed3 = new discord.RichEmbed()
.setColor('BLUE')
.setDescription(`
<a:up12:772083038317445130> \`u!yardım\`\n**Yardım menüsünü Görüntüler.**
<a:up12:772083038317445130> \`u!ekle\`\n**Sisteme Bot Eklersiniz 7/24 Aktif Tutar.**
<a:up12:772083038317445130> \`u!botsay\`\n**Sistemde Kaç Bağlantı Olduğunu Gösterir.**
<a:up12:772083038317445130> \`u!botbilgi\`\n**UptimeBot'un İstatistik Verilerini Atar.**
<a:up12:772083038317445130> \`u!davet\`\n**UptimeBot'un Davet Linkini Atar.**

<a:ay:770349119209209876> Botumu Kullandığnız İçin Teşekkürler! <a:ay:770349119209209876>
`)
.setTitle(`<a:ay:770349119209209876> Uptime Bot - Yardım Menüsü <a:ay:770349119209209876>`)
.setThumbnail(message.author.avatarURL)
.setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
.setTimestamp()
return message.channel.send(embed3);
    }
 
})
  const log = message => {
  console.log(`${message}`);
}
  
client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "u!botbilgi") {
let embed4 = new discord.RichEmbed()
.setColor('#ffff00')
.setDescription(`
<a:onay2:770251890621022208>  \`Kullanıcılar\` = ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
<a:onay2:770251890621022208>  \`Sunucular\` = ${client.guilds.size.toLocaleString()}
<a:onay2:770251890621022208>  \`Kanallar\` =  ${client.channels.size.toLocaleString()}
<a:onay2:770251890621022208>  \`Discord Sürümü\` = ${process.version}
`)
.setTitle(`Uptime Bot - Bot Bilgileri!`)
.setThumbnail(message.author.avatarURL)
.setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
.setTimestamp()
return message.channel.send(embed4);
    }
 
})

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "u!davet") {
let embed5 = new discord.RichEmbed()
.setColor('#ffff00')
.setDescription(`
<a:can:770510220014518283> [**Ekleme Linkim**](https://discord.com/oauth2/authorize?client_id=772086372718084127&permissions=8&scope=bot)
<a:can:770510220014518283> [**Destek Sunucusu**](https://discord.gg/F6yDQ37spZ)
`)
.setTitle(`<a:tik1:770251922392481812> UptimeBot - Davet et <a:tik1:770251922392481812>`)
.setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
.setTimestamp()
.setThumbnail(message.author.avatarURL)
return message.channel.send(embed5);
    }
 
})

//coded by ukqzn
  
client.on("guildCreate", server => {
  let embed6 = new Discord.RichEmbed()
    .setTitle(`Beni Sunucunuza Eklediğniz için Teşekkür Ederim!`)
    .setDescription("**u!yardım yazarak komutlarımı Öğrenebilirsiniz** <a:onay:756097883383791667>")
    .setColor('#ffff00')
    .setTimestamp()
  server.owner.send(embed6);
});
  