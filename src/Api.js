import React, { Component } from 'react';

class App extends Component {
    state = {
        data: [],
        size: null
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "/branches";
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                  data: result.branches,
                  size: result.size
                })
            });
    }

    render() {
        const data = this.state.data;
        const result = data.map((entry, index) => {
            return <li key={index}>{entry.name}, {this.state.size}</li>;
        });

        return <ul>{result}</ul>;
    }
}

export default App;
