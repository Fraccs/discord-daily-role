import { PermissionsBitField } from 'discord.js'

const isAdmin = (member) => {
  const permissions = member.permissions

  return permissions.has(PermissionsBitField.StageModerator)
}

export default isAdmin
