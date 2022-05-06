require('dotenv').config();

function giveRole(client, roleID) {
    const guild = client.guilds.cache.get(process.env.GUILD_ID);

    guild.members.fetch().then((members) => {
        const randomMember = members.random(); // Selecting the random member
        const role = guild.roles.cache.get(roleID);
        
        /* ---- Removing the role from every member ---- */
        members.forEach((member) => {
            member.roles.cache.some((role) => {
                if(role.id === roleID) {
                    member.roles.remove(role);
                }
            });
        });
        
        /* ---- Adding the role to the random member ---- */
        randomMember.roles.add(role);
    });
}

module.exports = { giveRole };
