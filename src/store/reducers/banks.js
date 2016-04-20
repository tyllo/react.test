import {
  BANKS_REQUEST,
  BANKS_SUCCESS,
  BANKS_FAIL,
} from 'store/constants/banks';

export const initialState = [];

export default function bankState(state = initialState, action) {
  switch (action.type) {
    case BANKS_SUCCESS:
      return action.payload;

    case BANKS_REQUEST:
    case BANKS_FAIL:
    default:
      return state;
    }
}
