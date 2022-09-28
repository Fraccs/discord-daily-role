import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import dotenv from 'dotenv'
import commands from '../commands/commands.js'

dotenv.config()

const ready = async (client) => {
  const registerCommands = async () => {
    try {
      if(process.env.STATUS === 'PRODUCTION') {
        await rest.put(Routes.applicationCommands(CLIENT_ID), {
          body: commands.map(command => command.data.toJSON()),
        })

        console.log('Successfully registered commands globally')
      } 
      else {
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
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
  }).setToken(process.env.TOKEN)

  registerCommands()
}

export default ready
