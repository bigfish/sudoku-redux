import { createStore } from 'redux';

//rows is an Immutable List of Lists
//used as initial state
const SudokuStore = (rows) => {

    const reducer = (state = {data: rows}, action) => {

        let newState = state;
        if (action.type === 'SET_VALUE') {
            newState = {
                data: state.data.setIn([action.row, action.col], action.val)
            };
        }
        console.dir(JSON.stringify(newState.data));

        return newState;

    };

    return createStore(reducer);
};


export default SudokuStore;

