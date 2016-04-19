import {
  BANKS_REQUEST,
  BANKS_SUCCESS,
  BANKS_FAIL,
} from 'store/constants/banks';

export function getBanks() {
  // TODO async
  return {
    type: BANKS_REQUEST
  }
}
