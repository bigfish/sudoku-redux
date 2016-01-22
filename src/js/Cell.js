/*eslint no-unused-vars:0*/
import React from 'react';

class Cell extends React.Component {

  render() {
    //{row, col, val, changeHandler}
    return (
      <input type="number"
        min="0"
        max="9"
        step="1"
        maxLength="1"
        className={'sudoku-cell' + ( this.props.val ? '' : ' empty')}
        value={this.props.val}
        onChange={ e => this.props.changeHandler(this.props.row, this.props.col, e.target.value) }/>
      );
  }
}

export default Cell;

