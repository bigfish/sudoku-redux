/*eslint no-unused-vars:0*/
import ReactDOM from 'react-dom';
import React from 'react';
import SudokuStore from './SudokuStore';
import Sudoku from './Sudoku';
import Immutable from 'immutable';

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

let rows = range(0,9)
            .map(row => (repeat(row,9)));

let store = SudokuStore(Immutable.fromJS(rows));


function renderApp() {

    let data = store.getState().data.toJS();
    ReactDOM.render(<Sudoku data={data} 
                    onCellChange={(row, col, val) =>
                        store.dispatch({
                            type: 'SET_VALUE',
                            row,
                            col,
                            val
                        })}/>,
        document.getElementById('sudoku'));

}


store.subscribe(renderApp);
renderApp();
