const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { readdirSync } = require('fs');
const path = require('path');

require('dotenv').config();

module.exports = async (client) => {
    const commandFiles = readdirSync('./src/commands/', (err, files) => {
        files.filter(el => path.extname(el) === '.js');
    });

    const commands = [];

    for(const file of commandFiles) {
        const command = require(`../commands/${file}`);

        commands.push(command.data.toJSON());
        client.commands.set(command.data.name, command);
    }

    const CLIENT_ID = client.user.id;

    const rest = new REST({
        version: '9',
    }).setToken(process.env.TOKEN);

    // BOT status
    client.user.setActivity("/dailyrole <roleID>", {
      type: "PLAYING"
    });

    (async () => {
        try {
            if (process.env.STATUS === 'PRODUCTION') {
                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                    body: commands,
                });

                console.log('Successfully registered commands globally');
            } 
            else {
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
                        body: commands
                    }
                );

                console.log('Successfully registered commands locally');
            }
        } 
        catch(err) {
            console.error(err);
        }
    })();
};
