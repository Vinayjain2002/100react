import React, { Component } from 'react';

class ClassCounterOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            name: ''
        };
    }

    updateDocumentTitle() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidMount() {
        this.updateDocumentTitle();
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.count!= this.state.count){
                    console.log('updating title');
                    this.updateDocumentTitle();
        }
        // console.log('updating title');
        //as here the count does not change but every time when name is changed then useEffect is called as defined inside the useEffect hook

        // this.updateDocumentTitle();
    }
    // componentWillUnmount()
    // it is called when we need to need to delete
    render() {
        return (
            <div>
                <input type="text" pl aceholder='name' value={this.state.name} onChange={e=> {this.setState({name: e.target.value})}}/>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me.
                </button>

            </div>
        );
    }
}

export default ClassCounterOne;
