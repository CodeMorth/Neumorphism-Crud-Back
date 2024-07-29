const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const { DB_NAME, DB_USER, DB_PASSWORD, PORT_DB, DB_HOST } = process.env

const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  port: PORT_DB,
  host: DB_HOST,
  dialect: 'mysql'
})

module.exports = sequelize
