import express from 'express'
import Guild from '../models/guild'

const route = express.Router()

route.get('/:id', async (req, res) => {
  const { id } = req.params

  const foundGuild = await Guild.findOne({
    guild_id: id
  })

  if(!foundGuild) {
    return res.status(404).json({
      error: 'Guild not found'
    })
  }

  return res.status(200).json(foundGuild)
})

route.post('/', async (req, res) => {
  const {
    channel_id,
    guild_id,
    role_id
  } = req.body

  const foundGuild = await Guild.findOne({
    guild_id: guild_id
  })

  if(foundGuild) {
    return res.status(400).json({
      error: 'Guild already exists'
    })
  }

  const newGuild = new Guild({
    channel_id: channel_id,
    guild_id: guild_id,
    role_id: role_id
  })

  const savedGuild = await newGuild.save()

  return res.status(200).json(savedGuild)
})

route.delete('/:id', async (req, res) => {
  const guild_id = req.params.id

  const foundGuild = await Guild.findOneAndDelete({
    guild_id
  })

  if(!foundGuild) {
    return res.status(404).json({
      error: 'Guild not found'
    })
  }

  res.status(200).json(foundGuild)
})

export default route
