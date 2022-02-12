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

const defaultState = { userInfo: null }

export const userLoginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }

    case USER_LOGIN_FAIL:
      return { loading: false, errors: action.payload }

    case USER_LOGOUT:
      return { userInfo: null }

    default:
      return { ...state }
  }
}

export const userRegisterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }

    case USER_REGISTER_FAIL:
      return { loading: false, errors: action.payload }

    default:
      return { ...state }
  }
}

export const userUpdateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true }

    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload }

    case USER_UPDATE_FAIL:
      return { loading: false, errors: action.payload }

    default:
      return { ...state }
  }
}
