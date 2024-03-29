import dotenv from 'dotenv'

dotenv.config()

const GUILD_ID = process.env.GUILD_ID
const HOST = process.env.HOST
const STATUS = process.env.STATUS
const TOKEN = process.env.TOKEN

const config = {
  GUILD_ID,
  HOST,
  STATUS,
  TOKEN
}

export default config
