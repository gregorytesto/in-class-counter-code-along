import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      numInput: ""
    }
  }

  handleDecrement=(num)=>{
    this.setState({
      count: this.state.count-num
    })
  }
  handleIncrement=(num)=>{
    this.setState({
      count: this.state.count+num
    });
  }

  handleInput=(event)=>{
    this.setState({
      numInput: event.target.value
    })
  }

  handleReset=()=>{
    this.setState({
      count: 0
    })
  }

  render(){
    return(
      <div>
        <div>{ this.state.count }</div>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={()=>this.handleIncrement(Number(this.state.numInput))}>+Custom</button>
        <button onClick={()=>this.handleIncrement(10)}>+10</button>
        <button onClick={()=>this.handleIncrement(1)}>+</button>
        <button onClick={()=>this.handleDecrement(1)}>-</button>
        <button onClick={()=>this.handleDecrement(10)}>-10</button>
        <button onClick={()=>this.handleDecrement(Number(this.state.numInput))}>-Custom</button>

        <br />
        <input 
          type="number"
          value={this.state.numInput}
          onInput={this.handleInput}
          placeholder="Value"
        />
      </div>
    )
  }
}

export default App;