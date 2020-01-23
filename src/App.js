import React from 'react';
import './App.css';
import Control from "./project_structure/Control"
import View from "./project_structure/View"
import * as math from 'mathjs'



class App extends React.Component {
  state= {
    input: "0",
    value: "0",
    operators: ["+", "-", "*", "/"]
    }
  
  handleClick = (val) => {
    const {input} = this.state;
    (input === "0") ?
      this.setState({
        input: val  
      }) :
      this.setState({
        input: input + val
      })
  }

  handleClear = () => {
    this.setState({
      input: "0",
      value: "0"
    })
  }

  evaluate = () => {
    const {input, value, operators} = this.state;
    try{
      (operators.includes(input.slice(0,1))) ?
        this.setState({
          input: "0",
          value: math.evaluate(value + input)
      }) : 
      this.setState({
        input: "0",
        value: math.evaluate(input)
      })
    }
    catch(error){
      this.setState({
        input: "0",
        value: "Invalid input"
      })
    }
  }
  
  render(){
    return (
      <div className="App">
        <View state={this.state}/>
        <Control handleClear = {this.handleClear} 
                 handleClick = {this.handleClick}
                 evaluate = {this.evaluate}
        />
      </div>
    );
  }
}


export default App;
