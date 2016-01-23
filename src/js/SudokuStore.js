import { createStore, compose } from 'redux';
import DevTools from './DevTools';

const createInstrumentedStore = compose(DevTools.instrument())(createStore);

//rows is an Immutable List of Lists
//used as initial state
const SudokuStore = (rows) => {

  const reducer = (state = { data: rows }, action) => {

    let newVal = action.val;

    if (!action.val) {
      newVal = 0;
    }

    newVal = parseInt(newVal);

    let newState = state;

    if (action.type === 'SET_VALUE') {
      newState = {
        data: state.data.setIn([action.row, action.col], newVal)
      };

    }

    console.dir(JSON.stringify(newState.data));
        //do validations, so errors can be indicated to user

    return newState;

  };

  return createInstrumentedStore(reducer);
};


export default SudokuStore;

