import { createStore } from 'redux';

//rows is an Immutable List of Lists
//used as initial state
const SudokuStore = (rows) => {

    const reducer = (state = {data: rows}, action) => {

        let newVal = action.val;

        //normalize value in case user typed in invalid value
        //falsy, or negative values are 0
        if (!action.val || action.val < 0) {
            newVal = 0;
        }
        //only use last digit typed -- this is probably what user wants
        if (action.val > 9) {
            newVal = action.val % 10;//get remainder after dividing by 10 => units
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

    return createStore(reducer);
};


export default SudokuStore;

