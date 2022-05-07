const mongoose = require('mongoose');

const GuildsSchema = new mongoose.Schema({
    guild_id: String,
    role_id: String
});

module.exports = mongoose.model("GuildsSchema", GuildsSchema);
