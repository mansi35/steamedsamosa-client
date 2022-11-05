import { combineReducers } from 'redux';
import accomodationsReducer from './accomodations';
import authReducer from './auth';
import beauticiansReducer from './beauticians';
import caterersReducer from './caterers';
import eventReducer from './events';
import floristsReducer from './florists';
import musicOptionsReducer from './musicOptions';
import packageReducer from './packages';
import photographersReducer from './photographers';
import venuesReducer from './venues';

export default combineReducers({
  authData: authReducer,
  events: eventReducer,
  packages: packageReducer,
  caterers: caterersReducer,
  beauticians: beauticiansReducer,
  musicOptions: musicOptionsReducer,
  florists: floristsReducer,
  venues: venuesReducer,
  photographers: photographersReducer,
  accomodations: accomodationsReducer,
});
