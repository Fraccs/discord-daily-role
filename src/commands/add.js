import { SlashCommandBuilder } from '@discordjs/builders'

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
    console.log('prova')
  }
}

export default add
