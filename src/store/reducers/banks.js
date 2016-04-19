import {
  BANKS_REQUEST,
  BANKS_SUCCESS,
  BANKS_FAIL,
} from 'store/constants/banks';

const initialState = [];

export default function bankState(state = initialState, action) {
  switch (action.type) {
    case BANKS_REQUEST:
      // TODO
      return {};

    case BANKS_SUCCESS:
      // TODO
      return {};

    case BANKS_FAIL:
      // TODO
      return {};

    default:
      return state;
    }
}
