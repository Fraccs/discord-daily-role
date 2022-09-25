import { Client } from 'discord.js'
import interactionCreate from './events/interactionCreate'
import ready from './events/ready'
import startBot from './utils/start'

const client = new Client({
  intents: [
    'Guilds',
    'GuildMembers',
    'GuildMessages',
    'GuildMessageTyping',
    'GuildMessageReactions'
  ]
})

startBot(client)
interactionCreate(client)

client.on('ready', () => {
  ready(client)
})
