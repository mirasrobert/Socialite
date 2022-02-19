const express = require('express')
const router = express.Router()

const {
  getComments,
  addComment,
  deleteComment,
} = require('../controllers/commentController')

const commentRequest = require('../request/commentsValidation')

const { protect } = require('../middleware/authMiddleware')

router
  .route('/')
  .get(protect, getComments)
  .post(protect, commentRequest.validate('addCommentValidation'), addComment)

router.route('/:id').delete(protect, deleteComment)

module.exports = router
