//render a Sudoku component
/*eslint no-unused-vars:0*/
import React from 'react';
import Cell from './Cell';
import store from './SudokuStore';

class Sudoku extends React.Component {

    onCellChange(idx, val) {
    
        store.dispatch({
            type: 'SET_VALUE',
            idx,
            val
        });
    
    }

    render() {
        let { data } = store.getState();

        return (<table className='sudoku-grid'>
                    <tbody>
                    <tr>
                        <td>
                        <Cell idx={0} 
                              val={data[0]}
                              changeHandler={this.onCellChange.bind(this)}
                            />

                        </td>
                    </tr>
                    </tbody>
                </table>);
    }
}

export default Sudoku;
