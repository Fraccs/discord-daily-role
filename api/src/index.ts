import express from 'express'
import dotenv from 'dotenv'
import Database from './db/database'
import guildRoute from './controllers/guilds'

dotenv.config()

const app = express()
const db = new Database()

db.connect()

app.use(express.json())
app.use('/api/guilds', guildRoute)

app.listen(process.env.PORT, () => {
  console.log(`Started server on port: ${process.env.PORT}`)
})
