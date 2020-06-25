import { combineReducers } from 'redux';

import asteroidREducer from './asteroidReducer';

export default combineReducers({
  asteroid: asteroidREducer,
});
