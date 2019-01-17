import React, {Component} from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Brach</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Branch-1</td>
                    </tr>
                    <tr>
                        <td>Branch-2</td>
                    </tr>
                    <tr>
                        <td>Branch-3</td>
                    </tr>
                    <tr>
                        <td>Branch-4</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;
