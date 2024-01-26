import React, {Component} from "react";

class ClassCounter extends Component{
  constructor(props){
    super(props);
    this.state={counter: 0};
  }

  // now we are going to define a method
  incrementCount=()=>{
    this.setState({
      counter: this.state.counter+1
    })
  }

  render(){
    return(
      <div>
        <p> we are going to define the counter using the Class based</p>
        <button onClick={this.incrementCount}>
          Click to increment
        </button>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default ClassCounter;