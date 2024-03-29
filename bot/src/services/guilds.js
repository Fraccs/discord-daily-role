import axios from 'axios'
import config from '../utils/config.js'

const baseUrl = `${config.HOST}/api/guilds`

const create = async (guild) => {
  const res = await axios.post(baseUrl, guild)

  return res.data
}

const getCurrent = async (guildId) => {
  const res = await axios.get(`${baseUrl}/${guildId}`)

  return res.data
}

const remove = async (guildId) => {
  const res = await axios.delete(`${baseUrl}/${guildId}`)

  return res.data
}

const guildsService = {
  create,
  getCurrent,
  remove
}

export default guildsService
