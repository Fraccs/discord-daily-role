import chalk from 'chalk'

class Logger {
  info = (message) => { console.log(chalk.blue(`🌐 ${message}`)) }
  success = (message) => { console.log(chalk.green(`✅ ${message}`)) }
  warning = (message) => { console.error(chalk.yellow(`⚠️ ${message}`)) }
  error = (message) => { console.error(chalk.red(`❌ ${message}`)) }
}

const logger = new Logger()

export default logger
