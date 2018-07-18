import { combineReducers } from 'redux';
import { exercises } from './exercises';
import { currentWorkout } from './currentWorkout';
// import { ui } from './ui';

export default combineReducers({
  exercises,
  currentWorkout,
// ui
})