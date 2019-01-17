import React, {Component} from 'react';

class BranchTable extends Component {
    render() {

      const { branchData } = this.props;

        return (
          <table>
              <TableHeader />
              <TableBody branchData={branchData} />
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

const TableBody = props => {
    const rows = props.branchData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.branch}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

export default BranchTable;
