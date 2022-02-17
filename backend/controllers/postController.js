const { validationResult } = require('express-validator')
const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')

// @desc    Get all posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find()
    .populate('user', ['name', 'avatar'])
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

  const { text, image } = req.body

  let data = {
    user: req.user._id,
    text,
  }

  // User uploads an image
  if (image) {
    data.image = image
  }

  const newPost = await Post.create(data)

  let post = await Post.findOne({ _id: newPost._id }).populate('user', [
    'name',
    'avatar',
  ])

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
    throw new Error('Something went wrong updating post.')
  }
})

// @desc    Get authenticated user's posts
// @route   GET /api/posts/my
// @access  Private
const getMyPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user._id })

  res.status(200).json(posts)
})

const likePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id) // Get the post

  if (!post.likes.includes(req.body.userId)) {
    // If user id is not include in array then its not liked

    await post.updateOne({ $push: { likes: req.body.userId } }) // Push
    res.status(200).json('The post has been liked')
  } else {
    // Remove like if exists
    await post.updateOne({ $pull: { likes: req.body.userId } }) // Pull or Remove
    res.status(200).json('The post has been disliked')
  }
})

module.exports = {
  getPosts,
  addPost,
  updatePost,
  deletePost,
  getMyPosts,
  likePost
}
