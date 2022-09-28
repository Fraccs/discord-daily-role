import axios from 'axios'

const baseUrl = '/api/guilds'

const create = async (guild) => {
  const res = await axios.post(baseUrl, guild)

  return res.data
}

const guildsService = {
  create
}

export default guildsService
