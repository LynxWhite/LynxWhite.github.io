import React, { Component } from 'react';
import imgSource from '../../images/test.png';

class Test extends Component {
    render() {
        return (
            <div> 
                <p>Hello world</p>
                <img src={imgSource}></img>
            </div>
        );
    }
}
export default Test;