import {
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_SUCCESS,
  TRANSACTIONS_FAIL,
} from 'store/constants/transactions';

export function getTransactions() {
  // TODO async
  return {
    type: TRANSACTIONS_REQUEST
  }
}
