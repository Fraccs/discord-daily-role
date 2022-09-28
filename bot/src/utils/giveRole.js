import guildsService from '../services/guilds.js'

const giveRole = async (client) => {
  const guilds = client.guilds.cache

  guilds.forEach(async (guild) => {
    let randomMember

    const members = await guild.members.fetch()
      .catch(e => console.error(e))

    do { // Select a random member (exclude BOTs)
      randomMember = members.random()
    }
    while(randomMember.user.bot)

    // Fetch the role to give
    try {
      const res = guildsService.getCurrent(guild.id)
    }
    catch(e) {
      return console.error(e)
    }

    // Resolve role
    const roles = await guild.roles.fetch()
      .catch(e => console.error(e))

    const role = roles.find(role => role.id = res.role_id)

    // Remove role from members that previously had it
    members.forEach(member => {
      member.roles.cache.some(role => {
        if(role.id === res.role_id) {
          member.roles.remove(role)
        }
      })
    })

    randomMember.roles.add(role)

    // Send output message
    const channel = guild.channels.resolve(res.channel_id)

    const embed = new MessageEmbed()
      .setColor('#00FF00')
      .setTitle('DailyRole BOT')
      .setURL('https://github.com/Fraccs/discord-daily-role')
      .setDescription(`Congratulations ${randomMember}, you earned the role ${role}.`)
      .setImage(randomMember.displayAvatarURL())
      .setTimestamp()
      .setFooter({
        text: 'Copyright (c) 2022 Francesco Cristiano Aliprandi'
      })

    channel.send({ embeds: [embed] })
  })
}

export default giveRole
