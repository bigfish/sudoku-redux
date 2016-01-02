//render a Sudoku component
/*eslint no-unused-vars:0*/
import React from 'react';
import Cell from './Cell';

class Sudoku extends React.Component {

    render() {
        let renderCell = (val, idx) => (<td key={`cell-${idx}`}>
                        <Cell idx={idx} val={val}
                              changeHandler={this.props.onCellChange}
                            /></td>);

        let renderRow = (rowNum) => (<tr key={`row-${rowNum}`}>{this.props.data.slice(rowNum*9, rowNum*9 + 9)
                                         .map(renderCell)}
                                     </tr>);

        return (<table className='sudoku-grid'>
                    <tbody>
                        {[0,1,2,3,4,5,6,7,8,9].map(renderRow)}
                    </tbody>
                </table>);
    }
}

export default Sudoku;
