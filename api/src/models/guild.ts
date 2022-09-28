import mongoose from 'mongoose'
import { IGuild } from '../interfaces/guild.interface'

const guildSchema = new mongoose.Schema<IGuild>({
  channel_id: { type: String, required: true },
  guild_id: { type: String, required: true },
  role_id: { type: String, required: true },
})

export default mongoose.model('Guild', guildSchema)
