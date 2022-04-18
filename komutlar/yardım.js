const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Sahip Nick`, client.user.avatarURL())
  .setColor("RED")
  .setThumbnail(client.user.avatarURL())
  .setDescription("Komutlar")
  .addField("Açıklama" , "Bot Adı")
  .setImage("Resim Linki")
.setFooter("Yardım Menüsü", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}