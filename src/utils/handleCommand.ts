import { Client, CommandInteraction } from 'discord.js'
import commands from '../commands/commands'

const handleCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
  const command = commands.find(c => c.name === interaction.commandName)

  if(!command) {
    interaction.followUp({
      content: 'An error has occurred'
    })
    
    return
  }

  await interaction.deferReply()

  command.run(client, interaction)
}

export default handleCommand
