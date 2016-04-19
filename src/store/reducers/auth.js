import Storage from 'services/storage';
import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,

  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,

  LOGOUT_SUCCESS,
} from 'store/constants/auth';

const defaults = {
  username: '',
  password: '',
  // TODO: hash
};

const initialState = Storage.get('user', defaults);

export default function userState(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      // TODO
      return {};

    case SIGNIN_SUCCESS:
      // TODO
      return {};

    case SIGNIN_FAIL:
      // TODO
      return {};

    case SIGNUP_REQUEST:
      // TODO
      return {};

    case SIGNUP_SUCCESS:
      // TODO
      return {};

    case SIGNUP_FAIL:
      // TODO
      return {};

    case LOGOUT_SUCCESS:
      // TODO
      return {};

    default:
      return state;
    }
}