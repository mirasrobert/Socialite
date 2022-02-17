const mongoose = require('mongoose')

const postShema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

// tags: {
//   type: String,
//   required: true,
// },

module.exports = mongoose.model('Post', postShema)
