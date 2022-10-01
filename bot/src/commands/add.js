import { EmbedBuilder } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
import guildsService from '../services/guilds.js'
import isAdmin from '../utils/isAdmin.js'

const add = {
  data: new SlashCommandBuilder()
    .setName('add')
    .setDescription('Set the role that the BOT will assign to a random user.')
    .addRoleOption(option =>
      option
        .setName('role')
        .setDescription('The role that the BOT will assign to a random user.')
        .setRequired(true)
    )
    .addChannelOption(option =>
      option
        .setName('channel')
        .setDescription('The channel where the greeting message will be printed.')
        .setRequired(false)
    ),
  run: async (client, interaction) => {
    const channel = interaction.options.get('channel') ? interaction.options.get('channel').value : interaction.channel.id
    const roleId = interaction.options.get('role').value

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

    if(!interaction.guild.roles.resolve(roleId)) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle(':x: Role not found!')
        .setDescription(`'${roleId}' didn't resolve in any role.`)
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
      await guildsService.create({
        channel_id: channel,
        guild_id: interaction.guild.id,
        role_id: roleId
      })

      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setTitle(':white_check_mark: Role successfully set!')
        .setDescription(`${interaction.guild.roles.resolve(roleId)}\n${interaction.guild.channels.resolve(channel)}`)
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
        .setDescription(`'${roleId}' is already saved.`)
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

export default add
