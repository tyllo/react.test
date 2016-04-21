import Storage from 'services/storage';
import {
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_SUCCESS,
  TRANSACTIONS_FAIL,

  TRANSACTION_ADD,
  TRANSACTION_DELETE,
} from 'store/constants/transactions';

const defaults = {
  list: [],
  fetch_at: 0,
};

export const initialState = Storage.get('transactions') || defaults;

export default function transactionsState(state = initialState, action) {
  var newState = Object.assign({}, state);

  switch (action.type) {
    case TRANSACTION_ADD:
      var id = newState.list.length ?
        (Math.max.apply(Math, newState.list.map(item => {
          return item.id;
        })) + 1) : 0;

      action.payload.id = id;
      newState.list = newState.list.concat(action.payload);
      Storage.set('transactions', newState);
      return newState;

    case TRANSACTION_DELETE:
      newState.list = newState.list.filter(({ id }) => {
        return id !== action.payload.id;
      }) || [];
      Storage.set('transactions', newState);
      return newState;

    case TRANSACTIONS_SUCCESS:
      newState.list = newState.list
        .concat(action.payload)
        .sort((a, b) => a.id - b.id)
        .filter((item, i, arr) => {
          return !i || item.id !== arr[i - 1].id;
        });

      newState.fetch_at = +(new Date());
      Storage.set('transactions', newState);
      return newState;

    case TRANSACTIONS_REQUEST:
    case TRANSACTIONS_FAIL:
    default:
      return state;
    }
}
