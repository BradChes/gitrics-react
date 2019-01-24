import React, { Component } from 'react';
import BranchTable from './BranchTable';
import BranchStatus from './BranchStatus';
import './style.css';

class App extends Component {
    state = {
        all: [],
        feat: [],
        spike: [],
        fix: [],
        other: [],
        unmerged: [],
        merged: [],
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
        const mergedUrl = "/branches/merged";
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
                  feat: result.branches
                })
            });

        fetch(spikeUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  spike: result.branches
                })
            });

        fetch(fixUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  fix: result.branches
                })
            });

        fetch(otherUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  other: result.branches
                })
            });

        fetch(unmergedUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  unmerged: result.branches
                })
            });

        fetch(mergedUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  merged: result.branches
                })
            });

        fetch(staleUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  stale: result.branches
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
        const merged = this.state.merged;
        const stale = this.state.stale;

        return (

          <div className="container">
            <h1>gitrics™</h1>
            <h2>Status</h2>
            <div className="cardArea">
              <BranchStatus branchSize={merged.length} branchName={"Merged"}/>
              <BranchStatus branchSize={stale.length} branchName={"Stale"}/>
              <BranchStatus branchSize={unmerged.length} branchName={"Unmerged"}/>
            </div>
            <div className="listArea">
              <h2>All Branches</h2>
              <BranchTable branchData={all}/>
              <br/>
              <h2>Feat Branches</h2>
              <BranchTable branchData={feat}/>
              <h2>Merged Branches</h2>
              <BranchTable branchData={merged}/>
              <br/>
              <h2>Unmerged Branches</h2>
              <BranchTable branchData={unmerged}/>
              <br/>
              <h2>Spike Branches</h2>
              <BranchTable branchData={spike}/>
              <br/>
              <h2>Fix Branches</h2>
              <BranchTable branchData={fix}/>
              <br/>
              <h2>Other Branches</h2>
              <BranchTable branchData={other}/>
              <br/>
              <h2>Stale Branches</h2>
              <BranchTable branchData={stale}/>
            </div>
          </div>
        )
    }
}

export default App;
