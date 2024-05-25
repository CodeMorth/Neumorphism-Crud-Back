const User = require('../models/User')

// const createUser = async (req, res) => {
//   try {
//     const dataReq = req.body
//     const avatar = req.file ? `/uploads/${req.file.filename}` : null

//     const user = await User.create({ ...dataReq, avatar })
//     res.status(201).json(user)
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// }

const createUser = async (req, res) => {
  try {
    const dataReq = req.body
    const avatar = req.file
      ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
      : null

    const user = await User.create({ ...dataReq, avatar })
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' })
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email } = req.body

    await User.update({ name, email }, { where: { id } })
    res.status(201).json(User)
  } catch (error) {
    res.status(400).json({ error: 'Usuario no encontrado' })
  }
}

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)

    if (user) {
      await user.destroy()
      res.json('Usuario eliminado')
    } else {
      res.status(400).json({ error: 'Usuario no encontrado' })
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { createUser, getAllUser, getUserById, updateUser, deleteUser }
