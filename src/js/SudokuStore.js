import { createStore, compose } from 'redux';
import DevTools from './DevTools';
import reducer from './reducer';

const createInstrumentedStore = compose(DevTools.instrument())(createStore);

//rows is an Immutable List of Lists
//used as initial state
function SudokuStore(rows) {

  const store = createInstrumentedStore(reducer, {data: rows});

  //https://github.com/gaearon/redux-devtools
  if (module.hot) {

    //don't bubble this change up, forcing app to re-render
    //comment out if you do want it to re-render..
    module.hot.accept();

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    module.hot.accept('./reducer', () => {
                      store.replaceReducer(require('./reducer').default)
                   });
  }
  return store;
}

export default SudokuStore;

