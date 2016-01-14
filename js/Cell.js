/*eslint no-unused-vars:0*/
import React from 'react';

const Cell = ({row, col, val, changeHandler}) => (
    <input type="number"
           min="0"
           max="9"
           step="1"
           maxlength="1"
           className={'sudoku-cell' + ( val ? '' : ' empty')} 
           value={val} 
           onChange={ e => changeHandler(row, col,  e.target.value) }/>
);

export default Cell;

