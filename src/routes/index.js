const express = require('express')
const User = require('../models/User')

const router = express.Router()

// Create user

router.post('/user', async (req, res) => {
  try {
    const dataReq = req.body

    const user = await User.create(dataReq)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Get all users

router.get('/user', async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Get user by id

router.get('/user/:id', async (req, res) => {
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
})

// Update users

router.put('/user/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name, email } = req.body

    await User.update({ name, email }, { where: { id } })
    res.status(201).json(User)
  } catch (error) {
    res.status(400).json({ error: 'Usuario no encontrado' })
  }
})

// Delete user

router.delete('/user/:id', async (req, res) => {
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
})

module.exports = router
