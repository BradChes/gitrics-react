import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import App from './App';
import RepoTables from './RepoTables';
import RepoCards from './RepoCards';
import './bootstrap.css';

ReactDOM.render((
    <Switch>
        <div className="container">
            <Route exact = {true} path = "/" component = { App }/>
            <Route exact = {true} path = "/:repoName" component = {RepoCards}/>
            <Route exact = {true} path = "/:repoName" component = {RepoTables}/>
        </div>
    </Switch>), document.getElementById('root'))