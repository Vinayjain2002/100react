import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounterOne from './useEffect/UseEffectClass';
import UseEffect from './useEffect/UseEffect';
import UseMouseClass from './useEffect/useMouseClass';
import EffectonlyOnce from './useEffect/EffectonlyOnce';
import MouseContainer from './useEffect/MouseContainer';
import IntervalHookCounter from './useEffect/intervalHookCounter';
import DataFetching from './useEffect/dataFetching';

class App extends Component {
  render() {
    return (
      <div>
        {/* <UseEffect/> */}
        {/* <ClassCounterOne /> */}
        {/* <UseMouseClass /> */}
        {/* <EffectonlyOnce /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalHookCounter /> */}
        <DataFetching />
      </div>
    );
  }
}

export default App;
