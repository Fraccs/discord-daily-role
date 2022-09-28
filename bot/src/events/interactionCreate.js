import handleCommand from '../utils/handleCommand.js'
import logger from '../utils/logger.js'

const interactionCreate = (client) => {
  client.on('interactionCreate', async (interaction) => {
    const { username, discriminator } = interaction.user
    const { id, name } = interaction.member.guild
    const { commandName } = interaction
    const { _hoistedOptions } = interaction.options

    logger.info({
      date: new Date(),
      user: `${username}#${discriminator}`,
      guildId: id,
      guildName: name,
      commandName,
      _hoistedOptions
    })

    if(interaction.isCommand()) {
      handleCommand(client, interaction)
    }
  })
}

export default interactionCreate
