/* eslint-disable default-param-last */
import { FETCH_PHOTOGRAPHERS } from '../../constants/actionTypes';

const photographersReducer = (state = { photographers: [] }, action) => {
  switch (action.type) {
    case FETCH_PHOTOGRAPHERS:
      return { ...state, photographers: action.payload };

    default:
      return state;
  }
};

export default photographersReducer;
