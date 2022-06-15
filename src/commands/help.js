const { SlashCommandBuilder, ChannelTypes } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('help')
  .setDescription('Print the help page of the BOT.'),
  async execute(interaction, client) {
    const embed = new MessageEmbed()
      .setColor('#00FF00')
      .setTitle('📖 Help')
      .setDescription('You can find the entire help page at: https://github.com/Fraccs/discord-daily-role#readme')
      .setTimestamp()
    
    interaction.reply({
        embeds: [embed]
    });
  }
}
