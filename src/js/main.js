/*eslint no-unused-vars:0*/
import ReactDOM from 'react-dom';
import React from 'react';
import SudokuStore from './SudokuStore';
import Sudoku from './Sudoku';
import Immutable from 'immutable';
import 'whatwg-fetch';
import DevTools from './DevTools';

let gameData = fetch('data/game1.json')
                .then(resp => resp.json())
                .then(json => {
                  init(json);
                }).catch(function (ex) {
                  console.log('parsing failed', ex);
                });
let store;

function init(gridData) {
  store = SudokuStore(Immutable.fromJS(gridData));
  store.subscribe(renderApp);
  renderApp();
}

function renderApp() {

  ReactDOM.render(<div>
                        <div>
                            <Sudoku data={store.getState().data}
                                    onCellChange={(row, col, val) => {
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


