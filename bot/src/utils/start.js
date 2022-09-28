const startBot = async (client) => {
  await client.login(process.env.TOKEN)
}

export default startBot
