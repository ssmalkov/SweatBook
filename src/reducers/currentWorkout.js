import * as actionTypes from '../actions/types';

export const currentWorkout = (state = [
  //TODO add initial state
], { type, payload }) => {

  switch (type) {
    case actionTypes.FETCH_CURRENT_WORKOUT_COMPLETE:
      return payload;
      case actionTypes.ADD_EXERCISE_COMPLETE:
      return [...state, payload];
    default:
      return state;
  }
}