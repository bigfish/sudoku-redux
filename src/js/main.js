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

if(module.hot) {

  module.hot.accept();

  /*module.hot.accept('./SudokuStore', function (arf) {
    
    console.log("main.js: detected SudokuStore change!");
    //we have to manually require and update the store module when it changes
    //we cannot assign to module import as that is immutable
    //so we use the new Store factory to create a new store
    //and initialize it with current state of the store
    let NewSudokuStore = require('./SudokuStore').default;
    //unsubscribe from old store
    unsubscribe();
    let data = store.getState().data;
    //assign to store closure variable
    store = NewSudokuStore(Immutable.fromJS(data));
    //update unsubscribe closure variable
    unsubscribe = store.subscribe(renderApp);

    renderApp();
  })*/

}


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


