import { ActivityType, Client } from 'discord.js'
import { readdirSync } from 'fs'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const ready = async (client: Client) => {
  const commands: string[] = []

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

  const commandFiles = readdirSync('./src/commands/')
  const commandNames = commandFiles.filter(el => {
    console.log(`Registered command: ${el}`)

    return path.extname(el) === '.js'
  })

  for(const file of commandNames) {
    const module = await import(`../commands/${file}`)
    const command = module.default

    commands.push(command.data.toJSON())
    client.application!.commands.set(command.data.name, command)
  }

  const CLIENT_ID = client.user!.id

  const rest = new REST({
    version: '9'
  }).setToken(process.env.TOKEN!)

  client.user!.setActivity('/dailyrole <roleID>', {
    type: ActivityType.Playing
  })

  registerCommands()
}

export default ready
