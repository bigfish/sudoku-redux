/*eslint no-unused-vars:0*/
import ReactDOM from 'react-dom';
import React from 'react';
import SudokuStore from './SudokuStore';
import Sudoku from './Sudoku';
import Immutable from 'immutable';
import 'whatwg-fetch';
import DevTools from './DevTools';
import '../css/sudoku.css';

var store;
let unsubscribe;

init();

function init() {

  fetch('data/game1.json')
  .then(resp => resp.json())
  .then(json => {

    store = SudokuStore(Immutable.fromJS(json));
    unsubscribe = store.subscribe(renderApp);

    renderApp();

  }).catch(function (ex) {
    console.log('parsing failed', ex);
  });

}

function renderApp() {

  console.log('renderApp');
  
  ReactDOM.render(<div>
                        <div>
                            <Sudoku data={store.getState().data}
                                    onCellChange={(row, col, val) => {
                                      //check if value is different
                                      store.dispatch({
                                        type: 'SET_VALUE',
                                        row,
                                        col,
                                        val
                                      });
                                    }
                                    }/>
                        </div>
                        <div>
                            <DevTools store={store}/>
                        </div>
                    </div>,
        document.getElementById('sudoku'));

}


