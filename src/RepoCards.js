import React, { Component } from 'react';
import BranchStatus from './BranchStatus';
import './style.css';

class RepoCards extends Component {
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
  }
  
  render() {
    const { match: { params } } = this.props;
    const unmerged = this.state.unmerged;
    const merged = this.state.merged;
    const stale = this.state.stale;
  
    return (
      <div className="container">
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

  export default RepoCards;