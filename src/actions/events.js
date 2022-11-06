import {
  FETCH_EVENTS, FETCH_CATERERS, UPDATE_EVENT, FETCH_FLORISTS, FETCH_MUSICOPTIONS, FETCH_VENUES, FETCH_BEAUTICIANS, FETCH_ACCOMODATIONS, FETCH_PHOTOGRAPHERS,
} from '../constants/actionTypes';
import * as api from '../api/index';

export const getEvents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents();
    dispatch({ type: FETCH_EVENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCaterers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCaterers();
    dispatch({ type: FETCH_CATERERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getFlorists = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFlorists();
    dispatch({ type: FETCH_FLORISTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getMusicOptions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMusic();
    dispatch({ type: FETCH_MUSICOPTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getVenues = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVenues();
    dispatch({ type: FETCH_VENUES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getBeauticians = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBeauticians();
    console.log(data);
    dispatch({ type: FETCH_BEAUTICIANS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAccomodations = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAccomodations();
    dispatch({ type: FETCH_ACCOMODATIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPhotographers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPhotographers();
    dispatch({ type: FETCH_PHOTOGRAPHERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent = (eventId, event) => async (dispatch) => {
  try {
    const { data } = await api.bookEvent(eventId, event);
    console.log(data);
    dispatch({ type: UPDATE_EVENT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
