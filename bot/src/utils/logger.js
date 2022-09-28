const info = (info) => {
  console.log(JSON.stringify(info))
}

const error = (error) => {
  console.error(JSON.stringify(error))
}

const logger = {
  info,
  error
}

export default logger
