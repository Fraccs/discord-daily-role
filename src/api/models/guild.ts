import mongoose from 'mongoose'
import { IGuild } from '../interfaces/guild.interface'

const guildSchema = new mongoose.Schema<IGuild>({
  channel_id: { type: Number, required: true },
  guild_id: { type: Number, required: true },
  role_id: { type: Number, required: true },
})

export default mongoose.model('Guild', guildSchema)
