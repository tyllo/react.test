import {
  TRANSACTION_SAVE,
  TRANSACTION_SAVE_REQUEST,
  TRANSACTION_SAVE_SUCCESS,
  TRANSACTION_SAVE_FAIL,

  TRANSACTION_DELETE,
  TRANSACTION_DELETE_REQUEST,
  TRANSACTION_DELETE_SUCCESS,
  TRANSACTION_DELETE_FAIL,
} from 'store/constants/transaction';

const initialState = {};

export default function transactionState(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION_SAVE:
      // TODO
      return {};

    case TRANSACTION_SAVE_REQUEST:
      // TODO
      return {};

    case TRANSACTION_SAVE_SUCCESS:
      // TODO
      return {};

    case TRANSACTION_SAVE_FAIL:
      // TODO
      return {};

    case TRANSACTION_DELETE:
      // TODO
      return {};

    case TRANSACTION_DELETE_REQUEST:
      // TODO
      return {};

    case TRANSACTION_DELETE_SUCCESS:
      // TODO
      return {};

    case TRANSACTION_DELETE_FAIL:
      // TODO
      return {};

    default:
      return state;
    }
}
