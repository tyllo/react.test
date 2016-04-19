import requester from 'services/requester';
import {
  BANKS_REQUEST,
  BANKS_SUCCESS,
  BANKS_FAIL,
} from 'store/constants/banks';

export function getBanks() {
  return (dispatch) => {
    dispatch({ type: BANKS_REQUEST });

    requester.getBanks()
      .then((banks) => dispatch({
        type: BANKS_SUCCESS,
        payload: banks,
      })).catch((error) => dispatch({
        type: BANKS_FAIL,
        error
      }));
  }
}
