import config from "./config.js"

const startBot = async (client) => {
  await client.login(config.TOKEN)
}

export default startBot
