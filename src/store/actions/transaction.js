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

export function saveTransaction(payload) {
  // TODO async
  return {
    type: TRANSACTION_SAVE
  }
}

export function deleteTransaction(payload) {
  // TODO async
  return {
    type: TRANSACTION_DELETE
  }
}
