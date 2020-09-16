import React, { Component } from 'react';

class Display extends Component {
    render() {
        let {result}=this.props;
        return (
            <div className='display tr'>
           <p>{result}</p>
            </div>
        );
    }
}

export default Display;
