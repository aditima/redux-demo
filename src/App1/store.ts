import { createStore } from 'redux';

// ACTION
export const actions = {
    colorOne: { type: 'one' },
    colorTwo: { type: 'two' }
};

const initialState = {
    boxOne: { color: 'red' },
    boxTwo: { color: 'green'}
};
  
// REDUCER
let colors = [ 'blue', 'yellow', 'pink', 'orange'];
let color1: number = 0, color2: number = 0;
function myReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'one':
            return Object.assign({}, state, {
                boxOne: { color: colors[color1++ %4] }
            });
        case 'two':
            return Object.assign({}, state, {
                boxTwo: { color: colors[color2++ %4] }
            });
        default:
            return state
    }
}
  
  // STORE
  export const store = createStore(myReducer, initialState);