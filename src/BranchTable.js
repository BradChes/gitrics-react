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
                <th>Name</th>
                <th>First Creation</th>
                <th>Last Commit</th>
                <th>Stale</th>
                <th>Merged</th>
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
