const User = require('../models/User')

const createUser = async (req, res) => {
  try {
    const dataReq = req.body
    const avatar = req.file ? `/uploads/${req.file.filename}` : null

    const user = await User.create({ ...dataReq, avatar })
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { createUser }
