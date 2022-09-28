import express from 'express'
import config from './utils/config'
import Database from './db/database'
import guildRoute from './controllers/guilds'

const app = express()
const db = new Database()

db.connect()

app.use(express.json())
app.use('/api/guilds', guildRoute)

app.listen(config.PORT, () => {
  console.log(`Started server on port: ${config.PORT}`)
})
