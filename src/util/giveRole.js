const { MessageEmbed } = require('discord.js');
const GuildsSchema = require('../models/GuildsSchema');

require('dotenv').config();

function giveRole(client) {
    const guilds = client.guilds.cache;

    guilds.forEach((guild) => {
        const guildID = guild.id;
        let randomMember;
        
        guild.members.fetch().then((members) => {
            do {
                randomMember = members.random(); // Selecting the random member
            }
            while(randomMember.user.bot); // Excluding BOTS

            GuildsSchema.findOne({ guild_id: guildID }, (err, res) => {
                if(err) return console.error(err);

                if(!res) return; // No document found for guild_id: guildID
    
                const role = guild.roles.cache.get(res.role_id);
    
                /* ---- Removing the role from every member ---- */
                members.forEach((member) => {
                    member.roles.cache.some((role) => {
                        if(role.id === res.role_id) {
                            member.roles.remove(role);
                        }
                    });
                });
                
                // Adding the role to the random member
                randomMember.roles.add(role);

                /* ---- Sending the greeting message ---- */
                const channel = guild.channels.resolve(res.channel_id);
                
                const embed = new MessageEmbed()
                    .setColor('#00ff00')
                    .setTitle('DailyRole BOT')
                    .setURL('https://github.com/Fraccs/discord-daily-role')
                    .setDescription(`Congratulations ${randomMember}, you earned the role ${role}.`)
                    .setImage(randomMember.displayAvatarURL())
                    .setTimestamp()
                    .setFooter({
                        text: 'Copyright (c) 2022 Francesco Cristiano Aliprandi'
                    });

                channel.send({ embeds: [embed] });
            });
        });
    });
}

module.exports = { giveRole };
