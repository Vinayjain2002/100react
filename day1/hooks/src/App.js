import React, { Component } from 'react';
import './App.css';
// import HookWithPrevious from './useState/hookwithPrevious';
import ObjectHook from './useState/objectHook';
import WithArray from './useState/WithArray';
// import ClassCounter from './useState/ClassCounter';
// import UseStateHook from './useState/useStateHook';

class App extends Component {
  render(){
    return(
      <div>
        <WithArray />
      </div>
    );
  }
}

export default App;
