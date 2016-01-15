/*eslint no-unused-vars:0*/
import ReactDOM from 'react-dom';
import React from 'react';
import SudokuStore from './SudokuStore';
import Sudoku from './Sudoku';
import Immutable from 'immutable';
import 'fetch';

function range(start, end) {
    let a = [];
    for (let i = start; i <= end; i++) {
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

let store;

let rows = range(1,9)
            .map(row => (repeat(row,9)));

let gameData = fetch('data/game1.json')
                .then(resp => resp.json())
                .then(json => {
                    init(json);
                }).catch(function(ex) {
                    console.log('parsing failed', ex);
                });

function init(gridData) {
    store = SudokuStore(Immutable.fromJS(gridData));
    store.subscribe(renderApp);
    renderApp();
}

function renderApp() {
    console.log('renderApp');
    

    ReactDOM.render(<Sudoku data={store.getState().data} 
                    onCellChange={(row, col, val) =>
                        store.dispatch({
                            type: 'SET_VALUE',
                            row,
                            col,
                            val
                        })}/>,
        document.getElementById('sudoku'));

}


