import throttle from 'lodash/throttle';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/index';
import { loadState, saveState } from './localStorage';

const initStore = () => {
  const preloadedState = loadState();

  const store = configureStore({
    reducer,
    preloadedState,
  });

  store.subscribe(throttle(() => {
    saveState({
      events: store.getState().events,
      packages: store.getState().packages,
      caterers: store.getState().caterers,
      florists: store.getState().florists,
      musicOptions: store.getState().musicOptions,
      beauticians: store.getState().beauticians,
      photographers: store.getState().photographers,
      venues: store.getState().venues,
      accomodations: store.getState().accomodations,
    });
  }, 1000));

  return store;
};

export default initStore;
