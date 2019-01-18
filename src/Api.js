import React, { Component } from 'react';
import BranchTable from './BranchTable';

class App extends Component {
    state = {
        all: [],
        allSize: null,
        fix: [],
        fixSize: null

    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const allUrl = "/branches";
        fetch(allUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  all: result.branches,
                  allSize: result.size
                })
            });

            const fixUrl = "/branches/fix";
            fetch(fixUrl)
                .then(result => result.json())
                .then(result => {
                    this.setState({
                      fix: result.branches,
                      fixSize: result.size
                    })
                });
    }

    render() {
        const all = this.state.all;
        const fix = this.state.fix;

        return (

          <div className="container">
          <h1>All Branches</h1>
          <BranchTable branchData={all}/>
          <h1>All Branches {this.state.allSize}</h1>
          <br/>
          <h1>Fix Branches</h1>
          <BranchTable branchData={fix}/>
          </div>
        )
    }
}

export default App;
