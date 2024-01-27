import React, { Component } from "react";
import MouseContainer from "./MouseContainer";

class UseMouseClass extends Component{
    constructor(props){
        super(props)

        this.state={
            x: 0,
            y: 0 
        }
    }

    logMousePosition= e=>{
        this.setState({x: e.clientX, y: e.clientY})
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePosition)
    }
    // exmple we try to remove the component in the MouseContainer after the widget is removed event listner still works
    componentWillUnmount(){
        // so here we need to unmount the eventistner
        window.removeEventListener('mousemove',this.logMousePosition)
    }
    render() {
      return (
        <div>
             X-{this.state.x} Y-{this.state.y}
        </div>
      )
    }
}

export default UseMouseClass