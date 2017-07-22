import React, { Component } from 'react';
import imgSource from '../../images/test.png';

class Test extends Component {
    render() {
        return (
            <div> 
                <p>{this.props.text}</p>
                <img src={imgSource}></img>
            </div>
        );
    }
}
export default Test;