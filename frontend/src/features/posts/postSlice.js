import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postService from './postService'

const initialState = {
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  errors: null,
}

// Get All Posts
export const getAllPosts = createAsyncThunk(
  'posts/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.getPosts(token) // Return all posts
    } catch (error) {
      const message =
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.errors
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Add Post
export const createPost = createAsyncThunk(
  'posts/create',
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.addPost(postData, token) // Return all posts
    } catch (error) {
      const message =
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.errors
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Like/Dislike Post
export const likedPost = createAsyncThunk(
  'posts/like',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.likedPost(data, token) 
    } catch (error) {
      const message =
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.errors
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
      state.posts = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
        state.errors = null
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.posts = []
        state.errors = action.payload
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = [action.payload, ...state.posts] // Push in the beginning of array
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.errors = action.payload
      })
  },
})

export const { reset } = postSlice.actions
export default postSlice.reducer
