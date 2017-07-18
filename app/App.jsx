import React, { Component } from 'react';
import Test from './components/test/test-component.jsx';

class App extends Component {
    render() {
        return (
            <div> 
                <h1> App </h1>
                <Test/> 
            </div>
        );
    }
}

export default App;