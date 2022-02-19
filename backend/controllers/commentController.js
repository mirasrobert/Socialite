const { validationResult } = require('express-validator')
const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel')

// @desc    Get all comments of the post
// @route   GET /api/comments
// @access  Private
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ post: req.body.postId })
    .populate('user', ['name', 'avatar'])
    .sort([['createdAt', '-1']])

  res.status(200).json(comments)
})

// @desc    Add a comment
// @route   POST /api/comments
// @access  Private
const addComment = asyncHandler(async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { text } = req.body

  let data = {
    user: req.user._id,
    post: req.body.postId,
    text,
  }

  const newComment = await Comment.create(data)

  if (newComment) {
    res.status(201).json(newComment)
  } else {
    throw new Error('Something went wrong adding comment.')
  }
})

// @desc    Delete a comment
// @route   DELETE /api/comments/:id
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  // Make sure that user is owned the comment
  if (comment.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error('Not authorized')
  }

  await comment.remove() // Delete comment

  if (comment) {
    res.status(200).json({ id: req.params.id })
  } else {
    throw new Error('Something went wrong updating comment.')
  }
})

module.exports = {
  getComments,
  addComment,
  deleteComment,
}
