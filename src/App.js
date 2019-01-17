import React, {Component} from 'react';
import BranchTable from './BranchTable';


class App extends Component {
    render() {
      const fakeson = [
        {
          'branch': 'branch-1'
        },
        {
          'branch': 'branch-2'
        },
        {
          'branch': 'branch-3'
        },
        {
          'branch': 'branch-4'
        }
      ];
        return (
          <div className="container">
            <BranchTable branchData={fakeson}/>
          </div>
        );
    }
}

export default App;
