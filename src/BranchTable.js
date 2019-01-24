import React, {Component} from 'react';
import './bootstrap.css';

class BranchTable extends Component {
    render() {

      const { branchData } = this.props;

        if (branchData.length !== 0) {
          return (
            <table>
                <TableHeader />
                <TableBody branchData={branchData} />
            </table>
          );
        } else {
          return (
            <p>No information to be shown.</p>
          )
        }
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr className="table-primary">
                <th scope="row">Name</th>
                <th scope="row">First Creation</th>
                <th scope="row">Last Commit</th>
                <th scope="row">Stale</th>
                <th scope="row">Merged</th>
            </tr>
        </thead>
    );
}

const TableBody = state => {
    const rows = state.branchData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.firstCreation}</td>
                <td>{row.lastCommit}</td>
                <td>{row.stale.toString()}</td>
                <td>{row.merged.toString()}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

export default BranchTable;
