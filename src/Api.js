import React, { Component } from 'react';

class App extends Component {
    state = {
        all: [],
        allSize: null,
        fix: [],
        fixSize: null

    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const allUrl = "/branches";
        fetch(allUrl)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  all: result.branches,
                  allSize: result.size
                })
            });

            const fixUrl = "/branches/fix";
            fetch(fixUrl)
                .then(result => result.json())
                .then(result => {
                    this.setState({
                      fix: result.branches,
                      fixSize: result.size
                    })
                });
    }

    render() {
        const all = this.state.all;
        const allResult = all.map((entry, index) => {
            return <li key={index}>{entry.name}, {this.state.allSize}</li>;
        });

        const fix = this.state.fix;
        const fixResult = fix.map((entry, index) => {
            return <li key={index}>{entry.name}, {this.state.fixSize}</li>;
        });

        return (
          <div className="container">
            <ul>{allResult}</ul>
            <ul>{fixResult}</ul>
          </div>
        )
    }
}

export default App;
