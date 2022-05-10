const { SlashCommandBuilder, ChannelTypes } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
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
    )
    .addChannelOption(option => 
        option
        .setName('channel')
        .setDescription('The channel where to print the greeting message.')
        .setRequired(false)
    ),
    async execute(interaction, client) {
        const channel = interaction.options.get('channel') ? interaction.options.get('channel').channel : interaction.channel;
        const channelID = channel.id;
        const roleID = interaction.options.get('roleid').value;

        /* ---- Checking if role exists ---- */
        if(!interaction.guild.roles.resolve(roleID)) {
            const embed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle(':x: Role not found!')
            .setDescription(`'${roleID}' didn't resolve in any role.`)
            .setTimestamp();

            interaction.reply({
                embeds: [embed]
            });

            return;
        }

        /* ---- Checking if channel is a text channel ---- */
        if(channel.type !== 'GUILD_TEXT') {
            const embed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle(':x: Not a text channel!')
            .setDescription(`'${channel.name}' isn't a text channel.`)
            .setTimestamp();

            interaction.reply({
                embeds: [embed]
            });

            return;
        }

        GuildsSchema.findOne({ guild_id: interaction.guild.id }, (err, guild) => {
            if(err) return console.error(err);

            if(!guild) { // Current guild doesn't have any record
                guild = new GuildsSchema({
                    guild_id: interaction.guild.id,
                    role_id: roleID
                })
            }
            else { // Overriding the old record roleID
                guild.role_id = roleID;
            }

            /* ---- Replying with success ---- */
            const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle(':white_check_mark: Role successfully set!')
            .setDescription(`${interaction.guild.roles.resolve(roleID)}`)
            .setTimestamp();

            interaction.reply({
                embeds: [embed]
            });

            guild.save((err) => {
                if(err) return console.error(err);
            });
        });
    }
}
