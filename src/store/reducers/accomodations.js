/* eslint-disable default-param-last */
import { FETCH_ACCOMODATIONS } from '../../constants/actionTypes';

const accomodationsReducer = (state = { accomodations: [] }, action) => {
  switch (action.type) {
    case FETCH_ACCOMODATIONS:
      return { ...state, accomodations: action.payload };

    default:
      return state;
  }
};

export default accomodationsReducer;
