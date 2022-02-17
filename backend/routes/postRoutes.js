const express = require('express')
const router = express.Router()
const {
  getPosts,
  addPost,
  updatePost,
  deletePost,
  getMyPosts,
  likePost,
} = require('../controllers/postController')

const postRequest = require('../request/postsValidation')

const { protect } = require('../middleware/authMiddleware')

router
  .route('/')
  .get(protect, getPosts)
  .post(protect, postRequest.validate('addPostValidation'), addPost)

router
  .route('/:id')
  .put(protect, postRequest.validate('addPostValidation'), updatePost)
  .delete(protect, deletePost)

router.get('/my', protect, getMyPosts)

router.put('/:id/like', protect, likePost)

module.exports = router
