import { Client } from 'discord.js'
import interactionCreate from './events/interactionCreate.js'
import ready from './events/ready.js'
import startBot from './utils/start.js'

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
