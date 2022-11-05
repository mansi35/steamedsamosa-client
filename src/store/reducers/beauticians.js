/* eslint-disable default-param-last */
import { FETCH_BEAUTICIANS } from '../../constants/actionTypes';

const beauticiansReducer = (state = { beauticians: [] }, action) => {
  switch (action.type) {
    case FETCH_BEAUTICIANS:
      return { ...state, beauticians: action.payload };

    default:
      return state;
  }
};

export default beauticiansReducer;
