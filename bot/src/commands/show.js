import { EmbedBuilder } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
import guildsService from '../services/guilds.js'

const show = {
  data: new SlashCommandBuilder()
    .setName('show')
    .setDescription('Show information about the current role.'),
  run: async (client, interaction) => {
    const guildId = interaction.guild.id

    try {
      const guild = await guildsService.getCurrent(guildId)

      const embed = new EmbedBuilder()
        .setColor('#0000FF')
        .setTitle('🌐 Config information.')
        .setDescription(`${interaction.guild.roles.resolve(guild.role_id)}\n${interaction.guild.channels.resolve(guild.channel_id)}`)
        .setFooter({
          text: `Copyright © 2022 DailyRole`,
          iconURL: 'https://user-images.githubusercontent.com/78105813/193416452-0c311bad-9c10-495d-a956-5b79eed2700b.png'
        })
        .setTimestamp()

      interaction.reply({
        embeds: [embed]
      })
    }
    catch(e) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle(':x: No information found!')
        .setFooter({
          text: `Copyright © 2022 DailyRole`,
          iconURL: 'https://user-images.githubusercontent.com/78105813/193416452-0c311bad-9c10-495d-a956-5b79eed2700b.png'
        })
        .setTimestamp()

      interaction.reply({
        embeds: [embed]
      })
    }
  }
}

export default show
