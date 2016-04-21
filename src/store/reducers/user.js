import Storage from 'services/storage';
import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,

  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,

  LOGOUT_SUCCESS,
} from 'store/constants/user';

const defaults = {
  username: '',
  password: '',
  error: '',
  isAutharicated: false,
  hash: null,
};

export const initialState = Storage.get('user') || defaults;

export default function userState(state = initialState, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case SIGNIN_REQUEST:
    case SIGNUP_REQUEST:
      action.payload.error = '';
      return Object.assign(newState, action.payload);

    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      Object.assign(newState, { isAutharicated: true, error: '' });
      Storage.set('user', newState);
      return newState;

    case SIGNIN_FAIL:
    case SIGNUP_FAIL:
      return Object.assign(newState, action.payload);

    case LOGOUT_SUCCESS:
      newState.isAutharicated = false;
      Storage.set('user', newState);
      return Object.assign({}, defaults);

    default:
      return state;
    }
}
