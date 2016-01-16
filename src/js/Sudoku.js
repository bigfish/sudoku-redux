/*eslint no-unused-vars:0*/
import React from 'react';
import Cell from './Cell';

const Sudoku = ({data, onCellChange}) => {

    let renderCell = (row, val, col) => (<td key={`cell-${col}`}>
                         <Cell row={row} col={col} val={val} 
                          changeHandler={onCellChange}
                        /></td>);

    let renderRow = (row, rowNum) => (<tr key={`row-${rowNum}`}>{row.map(renderCell.bind(this, rowNum))}</tr>);

    return (<table className='sudoku-grid'>
                <tbody>
                    {data.map(renderRow)}
                </tbody>
            </table>);
};

export default Sudoku;
