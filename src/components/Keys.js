import React, { Component } from 'react';


class Keys extends Component {

    render() {
        return (
            <div className='buttons'>
            <div>
            <button name='^2'className="operations" onClick={e=>this.props.onClick(e.target.name)}>^2</button>
            <button name='-1'className="operations" onClick={e=>this.props.onClick(e.target.name)}> 1/x</button> 
            <button name='('className="operations" onClick={e=>this.props.onClick(e.target.name)}>(</button> 
            <button name=')'className="operations" onClick={e=>this.props.onClick(e.target.name)}>)</button>
            <button name='/'className="operations" onClick={e=>this.props.onClick(e.target.name)}>/</button>
            </div>
            <div>
            <button name='tan'className="operations" onClick={e=>this.props.onClick(e.target.name)}>tan</button>
            <button name='7'  onClick={e=>this.props.onClick(e.target.name)}>7</button> 
            <button name='8'  onClick={e=>this.props.onClick(e.target.name)}>8</button> 
            <button name='9'  onClick={e=>this.props.onClick(e.target.name)}>9</button>
            <button name='*'className="operations" onClick={e=>this.props.onClick(e.target.name)}>*</button>
            </div>
            <div>
            <button name='cos'className="operations" onClick={e=>this.props.onClick(e.target.name)}>cos</button>
            <button name='4'  onClick={e=>this.props.onClick(e.target.name)}>4</button> 
            <button name='5'  onClick={e=>this.props.onClick(e.target.name)}>5</button> 
            <button name='6'  onClick={e=>this.props.onClick(e.target.name)}>6</button>
            <button name='-'className="operations" onClick={e=>this.props.onClick(e.target.name)}>-</button>
            </div>
            <div>
            <button name='sin'className="operations" onClick={e=>this.props.onClick(e.target.name)}>sin</button>
            <button name='1'  onClick={e=>this.props.onClick(e.target.name)}>1</button> 
            <button name='2'  onClick={e=>this.props.onClick(e.target.name)}>2</button> 
            <button name='3'  onClick={e=>this.props.onClick(e.target.name)}>3</button>
            <button name='+'className="operations" onClick={e=>this.props.onClick(e.target.name)}>+</button>
            </div>
            <div>
            <button name='C'  className="special"onClick={e=>this.props.onClick(e.target.name)}>C</button>
            <button name='⌫' className="special" onClick={e=>this.props.onClick(e.target.name)}>⌫</button> 
            <button name='0' onClick={e=>this.props.onClick(e.target.name)}>0</button> 
            <button name='.'className="special" onClick={e=>this.props.onClick(e.target.name)}>.</button>
            <button name='='  className="special" onClick={e=>this.props.onClick(e.target.name)}>=</button>
            </div>
         
           </div>
        );
    }
}

export default Keys;
