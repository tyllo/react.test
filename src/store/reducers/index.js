import { combineReducers } from 'redux';
import auth from './auth';
import banks from './banks';
import transaction from './transaction';
import transactions from './transactions';

export const rootReducer = combineReducers({
  auth,
  banks,
  transaction,
  transactions,
})
