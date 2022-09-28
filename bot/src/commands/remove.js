import { EmbedBuilder } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
import guildsService from '../services/guilds.js'

const remove = {
  data: new SlashCommandBuilder()
    .setName('remove')
    .setDescription('Remove the current role.'),
  run: async (client, interaction) => {
    const guildId = interaction.guild.id

    try {
      await guildsService.remove(guildId)

      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setTitle(':white_check_mark: Role successfully deleted!')
        .setTimestamp()

      interaction.reply({
        embeds: [embed]
      })
    }
    catch(_) {
      console.log(_)

      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle(':x: An error occurred!')
        .setDescription(`This guild hasn't registered any role.`)
        .setTimestamp()

      interaction.reply({
        embeds: [embed]
      })
    }
  }
}

export default remove
