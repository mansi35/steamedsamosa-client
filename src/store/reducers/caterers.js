/* eslint-disable default-param-last */
import { FETCH_CATERERS } from '../../constants/actionTypes';

const caterersReducer = (state = { caterers: [] }, action) => {
  switch (action.type) {
    case FETCH_CATERERS:
      return { ...state, caterers: action.payload };

    default:
      return state;
  }
};

export default caterersReducer;
