import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import config from '../utils/config.js'
import commands from '../commands/commands.js'

const ready = async (client) => {
  const registerCommands = async () => {
    try {
      if(config.STATUS === 'PRODUCTION') {
        await rest.put(Routes.applicationCommands(CLIENT_ID), {
          body: commands.map(command => command.data.toJSON()),
        })

        console.log('Successfully registered commands globally')
      } 
      else {
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, config.GUILD_ID), {
          body: commands.map(command => command.data.toJSON())
        })

        console.log('Successfully registered commands locally')
      }
    }
    catch(err) {
      console.error(err)
    }
  }

  const CLIENT_ID = client.user.id

  const rest = new REST({
    version: '10'
  }).setToken(config.TOKEN)

  registerCommands()
}

export default ready
