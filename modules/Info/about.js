exports.command = 'about';
const Discord = require('discord.js');
const baconhawk = "BaconHawkJS"
exports.about = {
	run: function(bot,suffix,msg) {
		const embed = new Discord.RichEmbed()
			.setTitle('About')
			.setDescription('Feel Free To Check Out My New Framework Right [Here](https://github.com/BaconHawk/BaconHawkJS/)')
			.setTimestamp()
			.setFooter(baconhawk)
			.setColor(0xee0000)
		msg.channel.sendEmbed(embed);
	}
}
