import handleCommand from '../utils/handleCommand.js'

const interactionCreate = (client) => {
  client.on('interactionCreate', async (interaction) => {
    if(interaction.isCommand()) {
      handleCommand(client, interaction)
    }
  })
}

export default interactionCreate
