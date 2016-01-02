//render a Sudoku component
import React from 'react';
import Cell from './Cell';


class Sudoku extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [0,0,0]
        };
    }

    onCellChange(idx, val) {
    
        var data = this.state.data.slice(0);
        data[idx] = val;
        
        this.setState({
            data: data
        });
    
    }

    render() {
        return (<table className='sudoku-grid'>
                    <tbody>
                    <tr>
                        <td>
                        <Cell idx={0} 
                              val={this.state.data[0]}
                              changeHandler={this.onCellChange.bind(this)}
                            />

                        </td>
                    </tr>
                    </tbody>
                </table>);
    }
}

export default Sudoku;
