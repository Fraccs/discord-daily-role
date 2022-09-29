import { EmbedBuilder } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
import guildsService from '../services/guilds.js'
import logger from '../utils/logger.js'
import isAdmin from '../utils/isAdmin.js'

const add = {
  data: new SlashCommandBuilder()
    .setName('add')
    .setDescription('Set the role that will be given each day.')
    .addStringOption(option =>
      option
        .setName('roleid')
        .setDescription('The ID of the role to set.')
        .setRequired(true)
    ),
  run: async (client, interaction) => {
    const channel = interaction.channel
    const roleId = interaction.options.get('roleid').value

    if(!isAdmin(interaction.member)) {
      logger.warning('User is not an admin.')
      return
    }

    if(!interaction.guild.roles.resolve(roleId)) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle(':x: Role not found!')
        .setDescription(`'${roleId}' didn't resolve in any role.`)
        .setTimestamp()

      interaction.reply({
        embeds: [embed]
      })

      return
    }

    try {
      await guildsService.create({
        channel_id: channel.id,
        guild_id: interaction.guild.id,
        role_id: roleId
      })

      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setTitle(':white_check_mark: Role successfully set!')
        .setDescription(`${interaction.guild.roles.resolve(roleId)}`)
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
        .setTimestamp()

      interaction.reply({
        embeds: [embed]
      })
    }
  }
}

export default add
