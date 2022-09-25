import { Client } from 'discord.js'
import handleCommand from '../utils/handleCommand'

const interactionCreate = (client: Client) => {
  client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
      handleCommand(client, interaction)
    }
  })
}

export default interactionCreate
