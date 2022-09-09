import { Client } from 'discord.js'

const startBot = async (client: Client) => {
  await client.login(process.env.TOKEN)
}

export default startBot
