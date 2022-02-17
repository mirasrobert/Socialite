import axios from 'axios'

const API_URL = '/api/posts/'

// Get All Posts on the server
const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data // return all posts
}

const addPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, postData, config)

  return response.data // return all posts
}

const likedPost = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + data.postId + '/like', data.userID, config)

  return response.data // return all posts
}

const postService = {
  getPosts,
  addPost,
  likedPost,
}

export default postService
