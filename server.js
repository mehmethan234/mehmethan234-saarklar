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
  client.user.setActivity(`h!ekle | h!yardım`, { url: 'https://twitch.tv/heavencode', type: 'STREAMING' });
  console.log(`Logined`)
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "h!ekle") {

  let embed10 = new Discord.RichEmbed()
        .setAuthor(`==================================`)
        .setColor('#FFCBDB')
        .setTitle("<a:hayr:770352436636155934> Hey Dur! Bu komutu botun özelinde **kullanmalısın!**")
        .setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
        .setDescription(`==================================`)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()

    message.delete();
        if (message.channel.type !== "dm") return message.channel.send(embed10)
  let embed1 = new Discord.RichEmbed()
        .setAuthor(`==================================`)
        .setColor('#FFCBDB')
        .setTitle("**Link Sistemde Zaten Aktif Ediliyor! . <a:hayr:770352436636155934>**")
        .setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
        .setDescription(`==================================`)
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
var link = spl[1]//ukqzn
  fetch(link).then(() => {//ukqzn
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send(embed1)
    
    let yardım = new Discord.RichEmbed()//ukqzn
        .setAuthor(`==================================`)
        .setColor('#FFCBDB')
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
        .setColor('#FFCBDB')
        .setTitle("**Lütfen Bir Live (Show) URL'si Girin. <a:hayr:770352436636155934>\n\n Hata: **" + e)
        .setImage(`https://cdn.discordapp.com/attachments/770618490155433994/774018912290734090/xw.png`)
        .setDescription(`==================================`)
        .setTimestamp()
   return message.channel.send(yardım2)
  })//ukqzn
  }
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "h!botsay") {
  var link = spl[1]
 message.channel.send(`<a:up12:772083038317445130>  Toplam \`${db.get("linkler").length}\` bot **aktif tutuluyor!**`)//ukqzn
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "h!yardım") {
let embed3 = new discord.RichEmbed()
.setColor('#FFCBDB')
.setDescription(`
<a:up12:772083038317445130> \`h!yardım\`\n**нєανєиυρтιмє Yardım menüsünü Görüntüler.**
<a:up12:772083038317445130> \`h!ekle\`\n**нєανєиυρтιмє Sistemine Bot Eklersiniz ve 7/24 Aktif Tutar.**
<a:up12:772083038317445130> \`h!botsay\`\n**нєανєиυρтιмє'n Sisteminde Kaç Proje Olduğunu Gösterir.**
<a:up12:772083038317445130> \`h!botbilgi\`\n**нєανєиυρтιмє'un İstatistik Verilerini Atar.**
<a:up12:772083038317445130> \`h!davet\`\n**нєανєиυρтιмє'un Davet Linkini Atar.**
<a:up12:772083038317445130> \`h!yapımcım\`\n**нєανєиυρтιмє'un Yapımcısını Gösterir!**

<a:ay:770349119209209876> Yapımcım : h!yapımcım <a:ay:770349119209209876>
`)
.setTitle(`<a:ay:770349119209209876> нєανєиυρтιмє - Yardım Menüsü <a:ay:770349119209209876>`)
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
  if(spl[0] == "h!botbilgi") {
let embed4 = new discord.RichEmbed()
.setColor('#FFCBDB')
.setDescription(`
<a:up1:770251121980735498>  \`Kullanıcılar\` = ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
<a:up1:770251121980735498>  \`Sunucular\` = ${client.guilds.size.toLocaleString()}
<a:up1:770251121980735498>  \`Kanallar\` =  ${client.channels.size.toLocaleString()}
<a:up1:770251121980735498>  \`Discord Sürümü\` = ${process.version}
`)
.setTitle(`нєανєиυρтιмє - Bot Bilgileri!`)
.setThumbnail(message.author.avatarURL)
.setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
.setTimestamp()
return message.channel.send(embed4);
    }
 
})

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "h!davet") {
let embed5 = new discord.RichEmbed()
.setColor('#FFCBDB')
.setDescription(`
<a:an:762725108867268609> [**Ekleme Linkim**](https://discord.com/oauth2/authorize?client_id=772086372718084127&permissions=8&scope=bot)
<a:an:762725108867268609> [**Destek Sunucusu**](https://discord.gg/F6yDQ37spZ)
`)
.setTitle(`<a:onay:756097883383791667>нєανєиυρтιмє - Davet et <a:onay:756097883383791667>`)
.setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
.setTimestamp()
.setThumbnail(message.author.avatarURL)
return message.channel.send(embed5);
    }
  })

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "h!nasılkullanırım") {
let embed5 = new discord.RichEmbed()
.setColor('#FFCBDB')
.setDescription(`
<a:an:762725108867268609> [**Nasıl Kullanacağını Öğrenmek İçin Tıkla**](https://www.youtube.com/watch?v=G6xBnsTEBrE)
`)
.setTitle(`<a:onay:756097883383791667>нєανєиυρтιмє - Davet et <a:onay:756097883383791667>`)
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
    .setDescription("**h!yardım yazarak komutlarımı Öğrenebilirsiniz** <a:onay:756097883383791667>")
    .setColor('#FFCBDB')
    .setTimestamp()
  server.owner.send(embed6);
  })
  client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "h!yapımcım") {
let embed5 = new discord.RichEmbed()
.setColor('#FFCBDB')
.setDescription(`
<a:an:762725108867268609> [**Yapımcım - 💎 ♦Heaven Code . exe♦ 💎#0001**]()
<a:an:762725108867268609> [**Yapımcıma Ulaşmak İçin Tıkla**](https://discord.gg/TmgNske)
`)
.setTitle(`<a:onay:756097883383791667>нєανєиυρтιмє Yapımcım <a:onay:756097883383791667>`)
.setImage(`https://images-ext-1.discordapp.net/external/LPg6gvHQmn_nVoSFr3B0m79vC-BgHOXknrVh3C1Ec9I/https/i.imgur.com/ZBKrXsQ.gif`)
.setTimestamp()
.setThumbnail(message.author.avatarURL)
return message.channel.send(embed5);
    }
});
  