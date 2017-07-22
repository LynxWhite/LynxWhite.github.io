import React, { Component } from 'react';
import Test from './components/test/test-component.jsx';
import './css/custom.styl';

class App extends Component {
    render() {
        return (
            <div> 
                <h1> App </h1>
                <Test text={'Hello world'} /> 
            </div>
        );
    }
}

export default App;