import { createStore } from 'redux';
//import Immutable from 'immutable';

//rows is an Immutable List of Lists
const SudokuStore = (rows) => {

    const reducer = (state = {data: rows}, action) => {
        //prevent mutating array of cells

        if (action.type === 'SET_VALUE') {
            return {
                data: state.data.setIn([action.row, action.col], action.value)
            };
        }

        return state;

    };

    return createStore(reducer);
};


export default SudokuStore;

