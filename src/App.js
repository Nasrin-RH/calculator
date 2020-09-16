import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Keys from './components/Keys';
import * as Math from 'mathjs';

class App extends Component {
  constructor() {
    super();
    this.state={
      result:''
    }
  }
  onClick=button=>{
    switch (button) {
      case '=':
        this.calculate();
        break;
      case 'C':
        this.reset();
        break;
      case '⌫':
        this.back();
        break;
      case 'sin':
        this.sin();
        break;
      case 'cos':
        this.cos();
        break;
      case 'tan':
        this.tan();
        break;
      case '^2':
        this.square();
        break;
      case '-1':
        this.inv();
        break;
    
      default:
        this.setState({
          result: this.state.result + button
      })
        break;
    }
  }
  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')){
        checkResult = this.state.result.replace('--','+')
    }

    else {
        checkResult = this.state.result
    }

    try {
        this.setState({
            result: (eval(checkResult).toPrecision(2) || "0" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

back = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

square=()=>{
  this.setState({
    result:Math.pow(this.state.result,2).toPrecision(3)
  })
}
sin=()=>{
  this.setState({
    result : Math.sin(this.state.result).toPrecision(2)
  })
}
cos=()=>{
  this.setState({
    result : Math.cos(this.state.result).toPrecision(2)
  })
}
tan=()=>{
this.setState({
result : Math.tan(this.state.result).toPrecision(2)
})
}
// percent=()=>{
//   this.setState({
//     result : this.state.result*0.01
//   })
// }
inv=()=>{
  this.setState({
    result : Math.pow(this.state.result,-1)
  })
}
  render() {
    return (
      <div>
        <br/>
        <br />
        <br />
        <br />
        <br />
    <div className="App " >
      <h2>Calculator</h2>
     <Display result={this.state.result}/>
     <Keys onClick={this.onClick} />
    </div>
    </div>
    );
  }
}

export default App;















