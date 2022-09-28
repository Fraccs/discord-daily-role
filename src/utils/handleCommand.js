import commands from '../commands/commands.js'

const handleCommand = async (client, interaction) => {
  const command = commands.find(c => c.data.name === interaction.commandName)

  if(!command) {
    interaction.reply({
      content: 'An error has occurred'
    })
    
    return
  }

  command.run(client, interaction)
}

export default handleCommand
