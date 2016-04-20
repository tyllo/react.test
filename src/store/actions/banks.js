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
      .then((payload) => dispatch({
        type: BANKS_SUCCESS,
        payload,
      })).catch(({ message }) => dispatch({
        type: BANKS_FAIL,
        payload: { error: message },
      }));
  }
}
