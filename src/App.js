import React, { Component } from 'react';
import RepoCards from './RepoCards';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

class App extends Component {
    render() {
        return (
          <Router>
            <div className="container">
              <Route exact = {true} path = "/" render = {() => (
                <h1> Welcome </h1>
              )}/>
              <Route path = "/:repoName" component = {RepoCards}/>
            </div>
          </Router>
        )
    }
}

export default App;