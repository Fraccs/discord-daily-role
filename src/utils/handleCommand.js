import commands from '../commands/commands'

const handleCommand = async (client, interaction) => {
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
