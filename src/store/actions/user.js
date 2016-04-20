import requester from 'services/requester';
import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,

  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,

  LOGOUT_SUCCESS,
} from 'store/constants/user';

export function login(payload) {
  return (dispatch) => {
    dispatch({ type: SIGNIN_REQUEST, payload });

    requester.login(payload)
      .then(() => dispatch({
        type: SIGNIN_SUCCESS,
        redirect: '/',
      }))
      .catch(({ message }) => dispatch({
        type: SIGNIN_FAIL,
        payload: { error: message },
      }));
  }
}

export function signup(payload) {
  return (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST, payload });

    requester.signup(payload)
      .then(() => dispatch({
        type: SIGNUP_SUCCESS,
        redirect: '/',
      }))
      .catch(({ message }) => dispatch({
        type: SIGNUP_FAIL,
        payload: { error: message },
      }));
  }
}

export function logout() {
  return (dispatch, state) => {
    // force logout
    dispatch({
      type: LOGOUT_SUCCESS,
    });

    requester.logout(state);
  }
}
