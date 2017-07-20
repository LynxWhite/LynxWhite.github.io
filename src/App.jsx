import React, { Component } from 'react';
import Test from './components/test/test-component.jsx';
import './css/custom.styl';
import './css/bootstrap.min.css';

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