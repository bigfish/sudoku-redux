/*eslint no-unused-vars:0*/
import React from 'react';

const Cell = ({idx, val, changeHandler}) => (
    <input className='sudoku-cell' 
           value={val} 
           onChange={ e => changeHandler(idx, e.target.value) }/>
);

export default Cell;
