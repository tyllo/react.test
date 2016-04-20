import Storage from 'services/storage';
import {
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_SUCCESS,
  TRANSACTIONS_FAIL,

  TRANSACTION_ADD,
  TRANSACTION_DELETE,
} from 'store/constants/transactions';

const defaults = [
  // TODO: delete this
  { id: 1, amount: 300, bankId: 1000 },
  { id: 2, amount: 200, bankId: 1200 },
];

export const initialState = Storage.get('transactions') || defaults;

export default function transactionsState(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION_ADD:
      var id = !state.length ? 0 : (Math.max(Math, state.map(item => item.id)) + 1);
      action.payload.id = id;
      return state.concat(action.payload);

    case TRANSACTION_DELETE:
      return state.filter(({ id }) => {
        return id !== action.payload.id;
      });

    case TRANSACTIONS_SUCCESS:
      return state
        .concat(action.payload)
        .sort((a, b) => a.id - b.id)
        .filter((item, i, arr) => {
          return !i || item.id !== arr[i - 1].id;
        });

    case TRANSACTIONS_REQUEST:
    case TRANSACTIONS_FAIL:
    default:
      return state;
    }
}
