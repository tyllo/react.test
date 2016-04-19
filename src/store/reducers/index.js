import { combineReducers } from 'redux';
import user from './user';
import banks from './banks';
import transaction from './transaction';
import transactions from './transactions';

export const rootReducer = combineReducers({
  user,
  banks,
  transaction,
  transactions,
})
