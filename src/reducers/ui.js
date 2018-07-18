import * as types from '../actions/types';

export const ui = (state = {
  exerciseModal: false,
  // loadingSpinner: false
}, { type, payload }) => {

  switch (type) {
    case types.SET_EXECERCISE_VISIBILITY:
      return {
        ...state,
        exerciseModal: payload
      };
    // case types.FETCH_CURRENT_WORKOUT: // in case 'fetch workout exercise' = true
    //   return {
    //     ...state,
    //     loadingSpinner: payload
    //   };
    default:
      return state;
  }
};