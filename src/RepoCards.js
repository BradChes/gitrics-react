import React, { Component } from 'react';
import BranchStatus from './BranchStatus';
import './style.css';

class RepoCards extends Component {
  state = {
    unmerged: [],
    merged: [],
    stale: [],
    lifetime: String
  };
  
  componentDidMount() {
    const { match: { params } } = this.props;
    const unmergedUrl = `${params.repoName}/branches/unmerged`;
    const mergedUrl = `${params.repoName}/branches/merged`;
    const staleUrl = `${params.repoName}/branches/stale`;
    const lifetimeUrl = `${params.repoName}/branches/lifetime`;

    fetch(unmergedUrl)
      .then(result => result.json())
      .then(result => {
        console.log(params)
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

    fetch(lifetimeUrl)
      .then(result => result.json())
      .then(result => {
        this.setState({
          lifetime: result.allLifetime
        })
      });
  }
  
  render() {
    const { match: { params } } = this.props;
    const unmerged = this.state.unmerged;
    const merged = this.state.merged;
    const stale = this.state.stale;
    const lifetime = this.state.lifetime;
  
    return (
      <div className="container">
        <h1>Gitrics for: {params.repoName}</h1>
        <h3>Branch Sizes:</h3>
        <div className="cardArea">
          <BranchStatus branchSize={merged.length} branchName={"Merged"}/>
          <BranchStatus branchSize={stale.length} branchName={"Stale"}/>
          <BranchStatus branchSize={unmerged.length} branchName={"Unmerged"}/>
        </div>
        <h3>Average Branch Lifetime:</h3>
        <div className="cardArea">
          <BranchStatus branchSize={lifetime} branchName={"All"}/>
          <BranchStatus branchSize={lifetime} branchName={"Features"}/>
          <BranchStatus branchSize={lifetime} branchName={"Spike"}/>
          <BranchStatus branchSize={lifetime} branchName={"Fix"}/>
        </div>
      </div>
    )
  }
}

  export default RepoCards;