import React, {Component} from 'react';
import './bootstrap.css';
import './style.css';


class BranchStatus extends Component {
    render() {

      const {branchSize} = this.props;
      const {branchName} = this.props;

        return (
            <BranchCard branchSize={branchSize} branchName={branchName} />
        );
    }
}

const BranchCard = props => {
  if(props.branchSize > 30) {
    return <BranchBad branchSize={props.branchSize} branchName={props.branchName}/>
  } else if(props.branchSize < 20 & props.branchSize >= 15) {
    return <BranchWarning branchSize={props.branchSize} branchName={props.branchName}/>
  } else if(props.branchSize < 15 & props.branchSize === 0){
    return <BranchGood branchSize={props.branchSize} branchName={props.branchName}/>
  } else {
    return  <BranchPlaceholder />
  }
}

const BranchGood = props => {
  return (
    <div className="card text-white bg-success mb-3 statusCard">
      <div className="card-header">{props.branchName}</div>
        <div className="card-body">
        <h4 className="card-title">Healthy Amount!</h4>
        <p className="card-text">There is only {props.branchSize} branche(s) in this category.</p>
      </div>
    </div>
  );
}

const BranchWarning = props => {
  return (
    <div className="card text-white bg-warning mb-3 statusCard">
      <div className="card-header">{props.branchName}</div>
      <div className="card-body">
        <h4 className="card-title">It's Growing!</h4>
        <p className="card-text">There are {props.branchSize} branche(s) in this category.</p>
      </div>
    </div>
  );
}

const BranchBad = props => {
  return (
    <div className="card text-white bg-danger mb-3 statusCard">
      <div className="card-header">{props.branchName}</div>
      <div className="card-body">
        <h4 className="card-title">Uh Oh.</h4>
        <p className="card-text">There are {props.branchSize} branche(s) in this catergory.</p>
      </div>
    </div>
  );
}

const BranchPlaceholder= () => {
  return (
    <div className="card text-white bg-primary mb-3 statusCard">
      <div className="card-header">Loading Results...</div>
      <div className="card-body">
        <h4 className="card-title">Loading Results...</h4>
        <p className="card-text">Taking some time loading the results from the API.</p>
      </div>
    </div>
  );
}

export default BranchStatus;
