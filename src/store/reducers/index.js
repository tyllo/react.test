import { combineReducers } from 'redux';
import user from './user';
import banks from './banks';
import transactions from './transactions';

export const rootReducer = combineReducers({
  user,
  banks,
  transactions,
})
