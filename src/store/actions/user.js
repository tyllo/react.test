import requester from 'services/requester';
import {
  CHECK_AUTH,

  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,

  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,

  LOGOUT_SUCCESS,
} from 'store/constants/user';

export function checkAuth() {
  return {
    type: CHECK_AUTH
  }
}

export function login(payload) {
  return (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST });

    requester.login(payload)
      .then(() => dispatch({
        type: SIGNIN_SUCCESS,
        redirect: '/',
      }))
      .catch((error) => dispatch({
        type: SIGNIN_FAIL,
        error,
      }));
  }
}

export function signin(payload) {
  return (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });

    requester.signup(payload)
      .then(() => dispatch({ type: SIGNUP_SUCCESS }))
      .catch((error) => dispatch({ type: SIGNUP_FAIL, error }));
  }
}

export function logout() {
  return (dispatch, state) => {
    // force logout
    dispatch({ type: LOGOUT_SUCCESS });

    requester.logout(state);
  }
}
