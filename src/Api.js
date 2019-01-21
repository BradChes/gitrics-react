import React, { Component } from 'react';
import BranchTable from './BranchTable';

class App extends Component {
    state = {
        all: [],
        feat: [],
        spike: [],
        fix: [],
        other: [],
        unmerged: [],
        stale: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const allUrl = "/branches";
        const featUrl = "/branches/feat";
        const spikeUrl = "/branches/spike";
        const fixUrl = "/branches/fix";
        const otherUrl = "/branches/other";
        const unmergedUrl = "/branches/unmerged";
        const staleUrl = "/branches/stale";

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

        fetch(spikeUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  spike: result.branches,
                })
            });

        fetch(fixUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  fix: result.branches,
                })
            });

        fetch(otherUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  other: result.branches,
                })
            });

        fetch(unmergedUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  unmerged: result.branches,
                })
            });

        fetch(staleUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  stale: result.branches,
                })
            });
    }

    render() {
        const all = this.state.all;
        const feat = this.state.feat;
        const spike = this.state.spike;
        const fix = this.state.fix;
        const other = this.state.other;
        const unmerged = this.state.unmerged;
        const stale = this.state.stale;


        return (

          <div className="container">
          <h1>All Branches</h1>
          <BranchTable branchData={all}/>
          <br/>
          <h1>Feat Branches</h1>
          <BranchTable branchData={feat}/>
          <br/>
          <h1>Spike Branches</h1>
          <BranchTable branchData={spike}/>
          <br/>
          <h1>Fix Branches</h1>
          <BranchTable branchData={fix}/>
          <br/>
          <h1>Other Branches</h1>
          <BranchTable branchData={other}/>
          <br/>
          <h1>Unmerged Branches</h1>
          <BranchTable branchData={unmerged}/>
          <br/>
          <h1>Stale Branches</h1>
          <BranchTable branchData={stale}/>
          </div>
        )
    }
}

export default App;
