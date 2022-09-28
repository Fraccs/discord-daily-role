import config from './config.js'
import logger from './logger.js'

const startBot = async (client) => {
  try {
    await client.login(config.TOKEN)

    logger.success('BOT successfully logged in.')
  }
  catch(e) {
    logger.error('BOT failed to login.')
  }
}

export default startBot
