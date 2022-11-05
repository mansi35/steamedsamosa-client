/* eslint-disable default-param-last */
import { FETCH_FLORISTS } from '../../constants/actionTypes';

const floristsReducer = (state = { florists: [] }, action) => {
  switch (action.type) {
    case FETCH_FLORISTS:
      return { ...state, florists: action.payload };

    default:
      return state;
  }
};

export default floristsReducer;
