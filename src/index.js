const { Collection, Client } = require('discord.js');
const { Database } = require('./database/database');
const { checkTimeout } = require('./util/checkNewDay');
const { giveRole } = require('./util/giveRole');

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'GUILD_INTEGRATIONS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGE_TYPING',
        'DIRECT_MESSAGES',
        'GUILD_MESSAGES',
        'DIRECT_MESSAGE_REACTIONS',
        'DIRECT_MESSAGE_TYPING'
    ]
});

const db = new Database();

/* ---- BOT setup and login ---- */
db.connect();

require('dotenv').config();

// Binding BOT events to the client
require('./util/eventLoader')(client);

// New commands collection
client.commands = new Collection();

client.login(process.env.TOKEN);

// Calls giverole if new day
checkTimeout(() => {
    giveRole(client);
});
