const mongoose = require('mongoose');

require('dotenv').config();

class Database {
    constructor() {
        this.connection = null;
    }

    connect() {
        mongoose.connect(process.env.DB_URL).then(() => {
            this.connection = mongoose.connection;
        }).catch((err) => {
            console.error(err);
        });
    }
}

module.exports = { Database };