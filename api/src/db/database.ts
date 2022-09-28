import mongoose from 'mongoose'
import config from '../utils/config'

class Database {
  connection: null | mongoose.Mongoose

  constructor() {
    this.connection = null
  }

  async connect() {
    try {
      const connection = await mongoose.connect(config.MONGODB_URI!)

      this.connection = connection
    }
    catch(err) {
      console.error(err)
    }
  }
}

export default Database
