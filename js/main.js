/*eslint no-unused-vars:0*/
import ReactDOM from 'react-dom';
import React from 'react';
import SudokuStore from './SudokuStore';
import Sudoku from './Sudoku';

function range(start, end) {
    let a = [];
    for (let i = 0; i <= end; i++) {
        a.push(i);
    }
    return a;
}

function repeat(val, times) {
    let a = [];
    for (let i = 0; i < times; i++) {
        a.push(val);
    }
    return a;
}

let cells = range(0,9)
            .map(row => (repeat(row,9)))
            .reduce((prev, curr) => (prev.concat(curr)));

let store = SudokuStore(cells);

function renderApp() {

    ReactDOM.render(<Sudoku data={store.getState().data} 
                    onCellChange={(idx, val) =>
                        store.dispatch({
                            type: 'SET_VALUE',
                            idx,
                            val
                        })}/>,
        document.getElementById('sudoku'));

}


store.subscribe(renderApp);
renderApp();
