import React, {Component} from 'react';

class BranchTable extends Component {
    render() {
        return (
          <table>
              <TableHeader />
              <TableBody />
          </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Branch</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
      <tbody>
          <tr>
              <td>Branch-1</td>
          </tr>
        </tbody>
    );
}

export default BranchTable;
