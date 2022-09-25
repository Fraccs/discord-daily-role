import { Client, CommandInteraction } from 'discord.js'
import { Command } from '../interfaces/command.interface'

const add: Command = {
  name: 'add',
  description: 'Add the role that will be given by the BOT.',
  run: async (client: Client, interaction: CommandInteraction) => {
    console.log('prova')
  }
}

export default add
