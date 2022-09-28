import { SlashCommandBuilder } from '@discordjs/builders'
import guildsService from '../services/guilds.js'

const add = {
  data: new SlashCommandBuilder()
    .setName('add')
    .setDescription('Set the role that will be given each day.')
    .addStringOption(option =>
      option
        .setName('roleid')
        .setDescription('The ID of the role to set.')
        .setRequired(true)
    )
    .addChannelOption(option =>
      option
        .setName('channel')
        .setDescription('The channel where to print the greeting message.')
        .setRequired(false)
    ),
  run: async (client, interaction) => {
    const roleId = interaction.options.get('roleid').value
    
    if(!interaction.guild.roles.resolve(roleId)) {
      interaction.reply({
        content: 'Not resolved'
      })

      return
    }

    if(channel.type !== 'GUILD_TEXT') {
      interaction.reply({
        content: 'Not text'
      })

      return
    }

    const res = await guildsService.create(guild)

    interaction.reply({
      content: 'Resolved'
    })
  }
}

export default add
