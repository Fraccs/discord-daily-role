import { Client } from 'discord.js'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import commands from '../commands/commands'
import dotenv from 'dotenv'

dotenv.config()

const ready = async (client: Client) => {
  const registerCommands = async () => {
    try {
      if(process.env.STATUS === 'PRODUCTION') {
        await rest.put(Routes.applicationCommands(CLIENT_ID), {
          body: commands,
        })

        console.log('Successfully registered commands globally')
      } 
      else {
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID!), {
          body: commands
        })

        console.log('Successfully registered commands locally')
      }
    }
    catch(err) {
      console.error(err)
    }
  }

  const CLIENT_ID = client.user!.id

  const rest = new REST({
    version: '9'
  }).setToken(process.env.TOKEN!)

  registerCommands()
}

export default ready
