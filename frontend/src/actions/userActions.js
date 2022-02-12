import axios from 'axios'

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from '../constants/userConstants'

import setAuthToken from '../utils/setAuthToken'

// User Login
export const login = (email, password) => async (dispatch) => {
  try {
    // Change the state
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `/api/users/login`,
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.errors,
    })
  }
}

// User Register
export const register = (name, email, password) => async (dispatch) => {
  try {
    // Change the state
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `/api/users`,
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    // Login the user after registration
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.errors,
    })
  }
}

// User Profile
export const updateUser =
  (name, email, bio, url, phone, job, position, studied) =>
  async (dispatch) => {
    try {
      // Change the state
      dispatch({
        type: USER_UPDATE_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const user = JSON.parse(localStorage.getItem('userInfo'))

      setAuthToken(user.token) // Pass the token to headers

      const body = {
        name,
        email,
        bio,
        url,
        phone,
        job,
        position,
        studied,
      }

      let { data } = await axios.put(`/api/users/${user._id}`, body, config)

      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: data,
      })

      // Dispatch Login Success to update userInfo
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.errors
            ? error.response.data.errors
            : error.errors,
      })
    }
  }

// Logout User
export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem('userInfo')

    // Change the state
    dispatch({
      type: USER_LOGOUT,
    })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.errors,
    })
  }
}
