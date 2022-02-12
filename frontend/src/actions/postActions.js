import axios from 'axios'

import {
  USER_POSTS_REQUEST,
  USER_POSTS_SUCCESS,
  USER_POSTS_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
} from '../constants/postConstants'

import setAuthToken from '../utils/setAuthToken'

// Get all posts
export const getAllPosts = () => async (dispatch) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    setAuthToken(userInfo.token)

    // Change the state
    dispatch({
      type: USER_POSTS_REQUEST,
    })

    const { data } = await axios.get(`/api/posts`)

    dispatch({
      type: USER_POSTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.error(error)

    dispatch({
      type: USER_POSTS_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.errors,
    })
  }
}

// Get all posts
export const addPost = (text, tags) => async (dispatch) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    setAuthToken(userInfo.token)

    // Change the state
    dispatch({
      type: ADD_POST_REQUEST,
    })

    const { data } = await axios.post(`/api/posts`, {
      text,
      tags,
    })

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.error(error)

    dispatch({
      type: ADD_POST_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.errors,
    })
  }
}
