const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')

const userRequest = require('../request/usersValidation')

const { protect } = require('../middleware/authMiddleware')

router
  .route('/')
  .post(userRequest.validate('registerUserValidation'), registerUser)
router.post('/login', userRequest.validate('loginUserValidation'), loginUser)
router.get('/me', protect, getMe)

module.exports = router
