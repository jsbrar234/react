import { useReducer } from 'react';

 export function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  if (action.type === 'decrement_age') {
    return {
      age: state.age -1
    };
  }
  throw Error('Unknown action.');
}

