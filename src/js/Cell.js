/*eslint no-unused-vars:0*/
import React from 'react';

class Cell extends React.Component {
  render() {
    return (
      <input type="text"
        maxLength="1"
        className={'sudoku-cell' + ( this.props.val ? '' : ' empty')}
        value={this.props.val ? this.props.val : ''}
        onKeyPress={ e => {
            if (! /\d/.test(e.key)) {
              e.preventDefault();
              e.stopPropagation();
            }
          }
        }
        onChange={ e => {
          if (e.target.value !== this.props.val + "") {
            this.props.changeHandler(this.props.row, this.props.col, e.target.value)
          }
        } }/>
      );
  }
}

export default Cell;

