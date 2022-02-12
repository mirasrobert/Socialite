import {
  USER_POSTS_REQUEST,
  USER_POSTS_SUCCESS,
  USER_POSTS_FAIL,
} from '../constants/postConstants'

const defaultState = { posts: [] }

export const userPostsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_POSTS_REQUEST:
      return { loading: true }

    case USER_POSTS_SUCCESS:
      return { loading: false, posts: action.payload }

    case USER_POSTS_FAIL:
      return { loading: false, errors: action.payload, posts: [] }

    default:
      return { ...state }
  }
}
