import { EmbedBuilder } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
import guildsService from '../services/guilds.js'
import isAdmin from '../utils/isAdmin.js'

const remove = {
  data: new SlashCommandBuilder()
    .setName('remove')
    .setDescription('Remove the current role.'),
  run: async (client, interaction) => {
    const guildId = interaction.guild.id

    if(!isAdmin(interaction.member)) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle(':x: Admin permissions needed!')
        .setFooter({
          text: `Copyright © 2022 DailyRole`,
          iconURL: 'https://user-images.githubusercontent.com/78105813/193416452-0c311bad-9c10-495d-a956-5b79eed2700b.png'
        })
        .setTimestamp()

      interaction.reply({
        embeds: [embed]
      })

      return
    }

    try {
      await guildsService.remove(guildId)

      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setTitle(':white_check_mark: Role successfully deleted!')
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
        .setTitle(':x: An error occurred!')
        .setDescription(`This guild hasn't registered any role.`)
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

export default remove
