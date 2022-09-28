import { Client } from 'discord.js'
import nodecron from 'node-cron'
import interactionCreate from './events/interactionCreate.js'
import ready from './events/ready.js'
import startBot from './utils/start.js'
import giveRole from './utils/giveRole.js'

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

  // Call giveRole each day
  nodecron.schedule('0 1 0 * *', () => {
    giveRole(client)
  })
})
