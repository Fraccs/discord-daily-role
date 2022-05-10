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
            });
        });
    });
}

module.exports = { giveRole };
