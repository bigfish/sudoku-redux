import { createStore } from 'redux';

const SudokuStore = (cells) => {
    const reducer = (state = { data: cells }, action) => {
        //prevent mutating array of cells
        let tmpData = state.data.slice();

        if (action.type === 'SET_VALUE') {
            tmpData[action.idx] = action.value;
        }

        return {
            data: tmpData
        };

    };

    return createStore(reducer);
};


export default SudokuStore;

