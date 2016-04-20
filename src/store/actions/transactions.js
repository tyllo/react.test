import requester from 'services/requester';
import {
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_SUCCESS,
  TRANSACTIONS_FAIL,

  TRANSACTION_ADD,
  TRANSACTION_DELETE,
} from 'store/constants/transactions';

export function getTransactions() {
  return (dispatch) => {
    dispatch({ type: TRANSACTIONS_REQUEST });

    requester.login(payload)
      .then(() => dispatch({
        type: TRANSACTIONS_SUCCESS,
        payload,
      }))
      .catch(({ message }) => dispatch({
        type: TRANSACTIONS_FAIL,
        payload: { error: message },
      }));
  }
}

export function addTransaction(payload) {
  return {
    type: TRANSACTION_ADD,
    payload,
  }
}

export function deleteTransaction(payload) {
  return {
    type: TRANSACTION_DELETE,
    payload,
  }
}
