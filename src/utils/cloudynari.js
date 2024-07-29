const { v2 } = require('cloudinary')
require('dotenv').config()

const cloudinary = v2

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env
// Configuration
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})

module.exports = cloudinary
