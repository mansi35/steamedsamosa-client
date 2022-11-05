/* eslint-disable default-param-last */
import { FETCH_VENUES } from '../../constants/actionTypes';

const venuesReducer = (state = { venues: [] }, action) => {
  switch (action.type) {
    case FETCH_VENUES:
      return { ...state, venues: action.payload };

    default:
      return state;
  }
};

export default venuesReducer;
