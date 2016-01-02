/*eslint no-unused-vars:0*/
import React from 'react';

const Cell = ({row, col, val, changeHandler}) => (
    <input className='sudoku-cell' 
           value={val} 
           onChange={ e => changeHandler(row, col,  e.target.value) }/>
);

export default Cell;
