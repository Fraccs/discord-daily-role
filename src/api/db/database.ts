import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

class Database {
  connection: null | mongoose.Mongoose

  constructor() {
    this.connection = null
  }

  async connect() {
    try {
      const connection = await mongoose.connect(process.env.DEV_DB_URL!)

      this.connection = connection
    }
    catch(err) {
      console.error(err)
    }
  }
}

export default Database
