import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Keys from './components/Keys';
import * as Math from 'Mathjs';

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
      case '%':
        this.percnt();
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
            result: (eval(checkResult) || " " ) + ""
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
    result:this.state.result*this.state.result
  })
}
sin=()=>{
  this.setState({
    result : Math.sin(this.state.result)
  })
}
cos=()=>{
  this.setState({
    result : Math.cos(this.state.result)
  })
}
tan=()=>{
this.setState({
result : Math.tan(this.state.result)
})
}

percnt=()=>{
   let per=this.state.result*0.01;
  this.setState({
    result : per
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















