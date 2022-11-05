/* eslint-disable default-param-last */
import { FETCH_PACKAGES, UPDATE_PACKAGE } from '../../constants/actionTypes';

const packageReducer = (state = { packages: [] }, action) => {
  switch (action.type) {
    case FETCH_PACKAGES:
      return { ...state, packages: action.payload };

    case UPDATE_PACKAGE:
      return { ...state, packages: state.packages.map((event) => (event.id === action.payload.id ? action.payload : event)) };

    default:
      return state;
  }
};

export default packageReducer;
