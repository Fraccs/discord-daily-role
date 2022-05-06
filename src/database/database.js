const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connection = null;
    }

    connect() {
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            this.connection = mongoose.connection;
        }).catch((err) => {
            console.error(err);
        });
    }
}

module.exports = { Database };