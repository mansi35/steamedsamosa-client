/* eslint-disable default-param-last */
import { FETCH_EVENTS, UPDATE_EVENT } from '../../constants/actionTypes';

const eventReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, events: action.payload };

    case UPDATE_EVENT:
      return { ...state, events: state.events.map((event) => (event.id === action.payload.id ? action.payload : event)) };

    default:
      return state;
  }
};

export default eventReducer;
