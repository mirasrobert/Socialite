const { validationResult } = require('express-validator')
const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')

// @desc    Get all posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find()
    .populate('user', ['name'])
    .sort([['createdAt', '-1']])

  res.status(200).json(posts)
})

// @desc    Add a post
// @route   POST /api/posts
// @access  Private
const addPost = asyncHandler(async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { text, tags } = req.body

  const newPost = await Post.create({
    user: req.user._id,
    text,
    tags,
  })

  let post = await Post.findOne({ _id: newPost._id }).populate('user', ['name'])

  if (post) {
    res.status(201).json(post)
  } else {
    throw new Error('Something went wrong adding post.')
  }
})

// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  // Make sure that user is owned the post
  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { text, tags } = req.body

  post.user = req.user._id
  post.text = text
  post.tags = tags

  await post.save()

  if (post) {
    res.status(200).json(post)
  } else {
    throw new Error('Something went wrong updating post.')
  }
})

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  // Make sure that user is owned the post
  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401)
    throw new Error('Not authorized')
  }

  await post.remove() // Delete post

  if (post) {
    res.status(200).json({ id: req.params.id })
  } else {
    throw new Erro('Something went wrong updating post.')
  }
})

// @desc    Get authenticated user's posts
// @route   GET /api/posts/my
// @access  Private
const getMyPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user._id })

  res.status(200).json(posts)
})

module.exports = {
  getPosts,
  addPost,
  updatePost,
  deletePost,
  getMyPosts,
}
