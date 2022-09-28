import handleCommand from '../utils/handleCommand.js'
import logger from '../utils/logger.js'

const interactionCreate = (client) => {
  client.on('interactionCreate', async (interaction) => {
    const { username, discriminator } = interaction.user
    const { name } = interaction.member.guild
    const { commandName } = interaction

    logger.info(`${username}#${discriminator} issued command '${commandName}' in ${name}.`)

    if(interaction.isCommand()) {
      handleCommand(client, interaction)
    }
  })
}

export default interactionCreate
