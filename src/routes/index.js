const upload = require('../middleware/multer.midleware')
const express = require('express')
const {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController')

const router = express.Router()

// Create user

router.post('/user', upload.single('avatar'), createUser)

// Get all users

router.get('/user', getAllUser)

// Get user by id

router.get('/user/:id', getUserById)

// Update users

router.put('/user/:id', updateUser)

// Delete user

router.delete('/user/:id', deleteUser)

module.exports = router
