//render a Sudoku component
/*eslint no-unused-vars:0*/
import React from 'react';
import Cell from './Cell';

class Sudoku extends React.Component {

    render() {
        let renderCell = (row, val, col) => (<td key={`cell-${col}`}>
                        <Cell row={row} col={col} val={val}
                              changeHandler={this.props.onCellChange}
                            /></td>);

        let renderRow = (row, rowNum) => (<tr key={`row-${rowNum}`}>{row.map(renderCell.bind(this, rowNum))}</tr>);

        return (<table className='sudoku-grid'>
                    <tbody>
                        {this.props.data.map(renderRow)}
                    </tbody>
                </table>);
    }
}

export default Sudoku;
