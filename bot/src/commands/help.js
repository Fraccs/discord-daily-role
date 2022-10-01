import { SlashCommandBuilder, EmbedBuilder } from 'discord.js'
import logger from '../utils/logger.js'

const help = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Need help?'),
  run: async (client, interaction) => {
    const roles = await interaction.guild.roles.fetch()
      .catch(() => logger.warning('Could not fetch roles.'))
    
    const channels = await interaction.guild.channels.fetch()
      .catch(() => logger.warning('Could not fetch channels.'))

    const textChannels = channels.filter(channel => channel.type === 0)

    const embed = new EmbedBuilder()
      .setColor('#DAAF37')
      .setTitle('🤖 DailyRole Help.')
      .setDescription(`
        **COMMANDS**

        ***🍀 /add <role> [<channel>]***

        *Set the role that the BOT will assign to a random user once a day.*

        ***Options:***

        **<role>** *The role that will be given to a random user.*
        **<channel> (optional)** *The text channel where the greeting message will be printed.*

        ***Examples:***

        **/add ${roles?.random()}**
        **/add ${roles?.random()} ${textChannels?.random()}**

        ***🍀 /show***

        *Show the current configuration (role/channel).*

        ***🍀 /remove***

        *Remove the current configuration.*

        ***🍀 /help***

        *Show this help message.*
      `)
      .setFooter({
        text: `Click the title for more help!`,
        iconURL: 'https://user-images.githubusercontent.com/78105813/193416452-0c311bad-9c10-495d-a956-5b79eed2700b.png'
      })
      .setURL('https://github.com/Fraccs/discord-daily-role')
      .setTimestamp()

    interaction.reply({
      embeds: [embed]
    })
  }
}

export default help
