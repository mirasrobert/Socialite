import {
  USER_POSTS_REQUEST,
  USER_POSTS_SUCCESS,
  USER_POSTS_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAIL,
} from '../constants/postConstants'

const defaultState = { posts: [], post: null, errors: null }

export const userPostsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_POSTS_REQUEST:
      return { ...state, loading: true }

    case USER_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload }

    case USER_POSTS_FAIL:
      return { ...state, loading: false, errors: action.payload, posts: [] }

    case ADD_POST_REQUEST:
      return { ...state, loading: true }

    case ADD_POST_SUCCESS:
      // Add the new post to the state
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts],
        post: action.payload,
      }

    case ADD_POST_FAIL:
      return { ...state, loading: false, errors: action.payload, post: null }

    default:
      return { ...state }
  }
}
