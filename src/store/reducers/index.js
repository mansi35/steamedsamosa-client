import { combineReducers } from 'redux';
import authReducer from './auth';
import caterersReducer from './caterers';
import eventReducer from './events';
import packageReducer from './packages';

export default combineReducers({
  authData: authReducer,
  events: eventReducer,
  packages: packageReducer,
  caterers: caterersReducer,
});
