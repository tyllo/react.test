import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,

  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,

  LOGOUT_SUCCESS,
} from 'store/constants/auth';

export function login(payload) {
  // TODO async
  return {
    type: SIGNIN_REQUEST
  }
}

export function signIn(payload) {
  // TODO async
  return {
    type: SIGNUP_REQUEST
  }
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  }
}
