/* eslint-disable default-param-last */
import { FETCH_MUSICOPTIONS } from '../../constants/actionTypes';

const musicOptionsReducer = (state = { musicOptions: [] }, action) => {
  switch (action.type) {
    case FETCH_MUSICOPTIONS:
      return { ...state, musicOptions: action.payload };

    default:
      return state;
  }
};

export default musicOptionsReducer;
