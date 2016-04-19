import Storage from 'services/storage';
import {
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_SUCCESS,
  TRANSACTIONS_FAIL,
} from 'store/constants/transactions';

const defaults = [];
const initialState = Storage.get('trnsactions', defaults);

export default function userState(state = initialState, action) {
  switch (action.type) {
    case TRANSACTIONS_REQUEST:
      // TODO
      return {};

    case TRANSACTIONS_SUCCESS:
      // TODO
      return {};

    case TRANSACTIONS_FAIL:
      // TODO
      return {};

    default:
      return state;
    }
}
