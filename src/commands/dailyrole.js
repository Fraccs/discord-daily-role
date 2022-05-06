const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { checkTimeout } = require('../util/checkNewDay');
const { giveRole } = require('../util/giveRole');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dailyrole')
    .setDescription('Set the role that will be given each day.')
    .addStringOption(option =>
        option
        .setName('roleid')
        .setDescription('The ID of the role to set.')
        .setRequired(true)
    ),
    async execute(interaction, client) {
        const roleID = interaction.options.get('roleid').value;
        
        const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle(':white_check_mark: Role successfully set!')
            .setTimestamp();

        interaction.reply({
            embeds: [embed]
        });

        /* Calls giverole if new day */
        checkTimeout(() => {
            giveRole(client, roleID);
        });
    }
}
