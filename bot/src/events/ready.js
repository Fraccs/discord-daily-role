import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import config from '../utils/config.js'
import commands from '../commands/commands.js'
import logger from '../utils/logger.js'
import { ActivityType } from 'discord.js'

const ready = async (client) => {
  const registerCommands = async () => {
    try {
      if(config.STATUS === 'PRODUCTION') {
        await rest.put(Routes.applicationCommands(CLIENT_ID), {
          body: commands.map(command => {
            logger.info(`Registered '${command.data.name}' command.`)
            return command.data.toJSON()
          }),
        })

        logger.success('Successfully registered commands globally.')
      } 
      else {
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, config.GUILD_ID), {
          body: commands.map(command => {
            logger.info(`Registered '${command.data.name}' command.`)
            return command.data.toJSON()
          })
        })

        logger.success('Successfully registered commands locally.')
      }
    }
    catch(err) {
      logger.error('Failed to register commands.')
    }
  }

  const CLIENT_ID = client.user.id

  const rest = new REST({
    version: '10'
  }).setToken(config.TOKEN)

  client.user.setActivity('/add <role>', {
    type: ActivityType.Playing
  })

  registerCommands()
}

export default ready
