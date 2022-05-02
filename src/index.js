const { Collection, Client } = require('discord.js');
const { checkTimeout } = require('./util/checkNewDay');
const { giveRole } = require('./util/giveRole');

require('dotenv').config();

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

/* Calls giverole if new day */
checkTimeout(() => {
    giveRole(client);
});

/* Basically loading the event and command loader ironic right */
require('./util/eventLoader')(client);

/* It's creating a new collection for the commands. */
client.commands = new Collection();

/* Logging the bot in. */
client.login(process.env.TOKEN);
