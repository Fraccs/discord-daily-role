import { Client } from 'discord.js'
import dotenv from 'dotenv'
import ready from './events/ready'
import startBot from './utils/start'

dotenv.config()

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

client.on('ready', () => {
  ready(client)
})
