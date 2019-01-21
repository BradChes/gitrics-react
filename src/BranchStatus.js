import React, {Component} from 'react';
import './bootstrap.css';
import './style.css';


class BranchStatus extends Component {
    render() {

      const {branchData} = this.props;

        return (
            <BranchCard branchData={branchData} />
        );
    }
}

const BranchCard = ({ branchData }) => {
  if(branchData > 15) {
    return <BranchBad/>
  } else if(branchData > 5) {
    return <BranchWarning/>
  } else {
    return <BranchGood/>
  }
}

const BranchGood = () => {
  return (
    <div className="card text-white bg-success mb-3 statusCard">
      <div className="card-header">Branch Name</div>
        <div className="card-body">
        <h4 className="card-title">Branch category is Healthy</h4>
        <p className="card-text">There is x branches in this category.</p>
      </div>
    </div>
  );
}

const BranchWarning = () => {
  return (
    <div className="card text-white bg-warning mb-3 statusCard">
      <div className="card-header">Branch Name</div>
      <div className="card-body">
        <h4 className="card-title">It's Growing</h4>
        <p className="card-text">There are x branches in this category.</p>
      </div>
    </div>
  );
}

const BranchBad = () => {
  return (
    <div className="card text-white bg-danger mb-3 statusCard">
      <div className="card-header">Branch Name</div>
      <div className="card-body">
        <h4 className="card-title">Uh Oh.</h4>
        <p className="card-text">There are x branches in this catergory.</p>
      </div>
    </div>
  );
}

export default BranchStatus;
