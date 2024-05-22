const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')
const router = require('./routes/index')
const cors = require('cors')
const sequelize = require('./config/database')

dotenv.config()

const app = express()

const port = process.env.PORT || 3000

app.use('/uploads', express.static('uploads'))

sequelize.sync()

app.use(cors())
app.use(morgan('dev'))

app.use(bodyParser.json())
app.use('/api', router)

app.listen(port, () => {
  console.log('Me estoy corriendo en el puerto', port, '🥵🥵🥵🥵🥵')
})
