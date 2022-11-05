import { FETCH_PACKAGES, UPDATE_PACKAGE } from '../constants/actionTypes';
import * as api from '../api/index';

export const getPackages = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPackages();
    dispatch({ type: FETCH_PACKAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent = (eventId, event) => async (dispatch) => {
  try {
    const { data } = await api.bookPackage(eventId, event);
    console.log(data);
    dispatch({ type: UPDATE_PACKAGE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
