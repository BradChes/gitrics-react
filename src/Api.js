import React, { Component } from 'react';
import BranchTable from './BranchTable';

class App extends Component {
    state = {
        all: [],
        feat: [],
        fix: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const allUrl = "/branches";
        const featUrl = "/branches/feat";
        const fixUrl = "/branches/fix";

        fetch(allUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  all: result.branches,
                })
            });

        fetch(featUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  feat: result.branches,
                })
            });

        fetch(fixUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  fix: result.branches,
                })
            });
    }

    render() {
        const all = this.state.all;
        const feat = this.state.feat;
        const fix = this.state.fix;


        return (

          <div className="container">
          <h1>All Branches</h1>
          <BranchTable branchData={all}/>
          <br/>
          <h1>Feat Branches</h1>
          <BranchTable branchData={feat}/>
          <br/>
          <h1>Fix Branches</h1>
          <BranchTable branchData={fix}/>
          </div>
        )
    }
}

export default App;
