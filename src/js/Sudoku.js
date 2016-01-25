/* eslint no-unused-vars:0*/
import React from 'react';
import Cell from './Cell';

class Sudoku extends React.Component {

  renderCell(row, val, col) {

    return (<td key={`cell-${col}`}>
      <Cell row={row} col={col} val={val}
        changeHandler={this.props.onCellChange}
      /></td>);

  }

  renderRow(row, rowNum) {

    return (<tr key={`row-${rowNum}`}>
      {row.map(this.renderCell.bind(this, rowNum))
      }</tr>);
  }

  render() {

    return (<table className="sudoku-grid foobar">
      <tbody>
        {this.props.data.map(this.renderRow.bind(this))}
      </tbody>
    </table>);

  }


}

export default Sudoku;
