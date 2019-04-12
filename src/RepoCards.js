import React, { Component } from 'react';
import BranchStatus from './BranchStatus';
import LoadingSpinner from './LoadingSpinner';
import './style.css';

class RepoCards extends Component {

  constructor() {
    super()
    this.state = {
      unmerged: 0,
      merged: 0,
      stale: 0,
      allLifetime: 0,
      featureLifetime: 0,
      spikeLifetime: 0,
      fixLifetime: 0,
      loading: false
    };
  }
  
  componentDidMount() {
    const { match: { params } } = this.props;
    const unmergedUrl = `${params.repoName}/branches/unmerged`;
    const mergedUrl = `${params.repoName}/branches/merged`;
    const staleUrl = `${params.repoName}/branches/stale`;
    const lifetimeUrl = `${params.repoName}/branches/lifetime`;

    this.setState({loading: true});
    Promise.all([
      fetch(unmergedUrl),
      fetch(mergedUrl),
      fetch(staleUrl),
      fetch(lifetimeUrl)
    ])
    .then(([res1, res2, res3, res4]) => ([res1.json(), res2.json(),res3.json(), res4.json()]))
    .then(([res1, res2, res3, res4]) => {
      console.log(res1)
      this.setState({
      unmerged: res1.size,
      merged: res2.size,
      stale: res3.size,
      allLifetime: res4.allLifetime,
      featureLifetime: res4.featureLifetime,
      spikeLifetime: res4.spikeLifetime,
      fixLifetime: res4.fixLifetime,
      loading: false
    })});
  }
  
  render() {
    const { match: { params } } = this.props;
    const unmerged = this.state.unmerged;
    const merged = this.state.merged;
    const stale = this.state.stale;
    const allLifetime = this.state.allLifetime;
    const featureLifetime = this.state.featureLifetime;
    const spikeLifetime = this.state.spikeLifetime;
    const fixLifetime = this.state.fixLifetime;
    const loading = this.state.loading
  
    return (
      <div className="container">
        <h1>Gitrics for: {params.repoName}</h1>
        {loading ? <LoadingSpinner/> : 
          <div>
              <h3>Branch Type Sizes:</h3>
              <div className="cardArea">
                <BranchStatus branchSize={merged} branchName={"Merged"}/>
                <BranchStatus branchSize={stale} branchName={"Stale"}/>
                <BranchStatus branchSize={unmerged} branchName={"Unmerged"}/>
              </div>
              <h3>Average Branch Lifetime:</h3>
              <div className="cardArea">
                <BranchStatus branchSize={allLifetime} branchName={"All"}/>
                <BranchStatus branchSize={featureLifetime} branchName={"Features"}/>
                <BranchStatus branchSize={spikeLifetime} branchName={"Spike"}/>
                <BranchStatus branchSize={fixLifetime} branchName={"Fix"}/>
              </div>
            </div>
        }
      </div>
    )
  }
}

export default RepoCards;