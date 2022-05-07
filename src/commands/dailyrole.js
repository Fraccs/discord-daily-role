const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { checkTimeout } = require('../util/checkNewDay');
const { giveRole } = require('../util/giveRole');
const GuildsSchema = require('../models/GuildsSchema');

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

        GuildsSchema.findOne({ guild_id: interaction.guild.id }, (err, guild) => {
            if(err) return console.error(err);

            if(!guild) { // Current guild doesn't have any record
                guild = new GuildsSchema({
                    guild_id: interaction.guild.id,
                    role_id: roleID
                })

                /* ---- Replying with success ---- */
                const embed = new MessageEmbed()
                .setColor('#00FF00')
                .setTitle(':white_check_mark: Role successfully set!')
                .setDescription(`${interaction.guild.roles.resolve(roleID)}`)
                .setTimestamp();

                interaction.reply({
                    embeds: [embed]
                });

                /* Calls giverole if new day */
                checkTimeout(() => {
                    giveRole(client, roleID);
                });
            }
            else { // Found record for the current guild
                /* ---- Replying with failure ---- */
                const embed = new MessageEmbed()
                .setColor('#FF0000')
                .setTitle(':x: Failed to set role!')
                .setDescription('Found another record for this guild.')
                .setTimestamp();

                interaction.reply({
                    embeds: [embed]
                });

                /* Calls giverole if new day */
                checkTimeout(() => {
                    giveRole(client, roleID);
                });
            }

            guild.save((err) => {
                if(err) return console.error(err);
            });
        });
    }
}
