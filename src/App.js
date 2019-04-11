import React, { Component } from 'react';
import BranchTable from './BranchTable';
import BranchStatus from './BranchStatus';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

class App extends Component {
    state = {
        // all: [],
        // feat: [],
        // spike: [],
        // fix: [],
        // other: []
    };

    componentDidMount() {
        // const allUrl = "/branches";
        // const featUrl = "/branches/feat";
        // const spikeUrl = "/branches/spike";
        // const fixUrl = "/branches/fix";
        // const otherUrl = "/branches/other";

        // fetch(allUrl)
        //     .then(result => result.json())
        //     .then(result => {
        //         this.setState({
        //           all: result.branches,
        //         })
        //     });

        // fetch(featUrl)
        //     .then(result => result.json())
        //     .then(result => {
        //         this.setState({
        //           feat: result.branches
        //         })
        //     });

        // fetch(spikeUrl)
        //     .then(result => result.json())
        //     .then(result => {
        //         this.setState({
        //           spike: result.branches
        //         })
        //     });

        // fetch(fixUrl)
        //     .then(result => result.json())
        //     .then(result => {
        //         this.setState({
        //           fix: result.branches
        //         })
        //     });

        // fetch(otherUrl)
        //     .then(result => result.json())
        //     .then(result => {
        //         this.setState({
        //           other: result.branches
        //         })
        //     });
    }

    render() {
        // const all = this.state.all;
        // const feat = this.state.feat;
        // const spike = this.state.spike;
        // const fix = this.state.fix;
        // const other = this.state.other;

        return (
          <Router>
            <div className="container">
              <Route exact = {true} path = "/" render = {() => (
                <h1> Welcome </h1>
              )}/>
              <Route path = "/:repoName" component = {Repo}/>

              {/* <div className="listArea">
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
              </div> */}
            </div>
          </Router>
        )
    }
}

const RepoSection = ({ match }) => (
  <div>
    <h1>gitrics</h1>
    <h2>{match.params.repoName}</h2>
    <h3>Status</h3>
  </div>
)

class Repo extends Component {
  state = {
    unmerged: [],
    merged: [],
    stale: []
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    const unmergedUrl = `${params.repoName}/branches/unmerged`;
    const mergedUrl = `${params.repoName}/branches/merged`;
    const staleUrl = `${params.repoName}/branches/stale`;
    
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
    const { match: { params } } = this.props;
    const unmerged = this.state.unmerged;
    const merged = this.state.merged;
    const stale = this.state.stale;

    return (
        <div>
          <h1>gitrics</h1>
          <h2>{params.repoName}</h2>
          <h3>Status</h3>
          
          <div className="cardArea">
            <BranchStatus branchSize={merged.length} branchName={"Merged"}/>
            <BranchStatus branchSize={stale.length} branchName={"Stale"}/>
            <BranchStatus branchSize={unmerged.length} branchName={"Unmerged"}/>
          </div>
        </div>
    )
  }
}

export default App;