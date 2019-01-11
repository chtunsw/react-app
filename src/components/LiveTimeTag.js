import React, { Component } from 'react';

class LiveTimeTag extends Component {
    constructor () {
        super();
      this.state = {time: new Date()};
    }

    updateTime() {
        this.timerId = setInterval(()=>{
            this.setState({time: new Date()});
        }, 1000);
    }

    componentDidMount() {
        this.updateTime()
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render () {
        return(<div>
            <h2>It is {this.state.time.toLocaleString()}.</h2>
        </div>)   
    }
  }

export default LiveTimeTag;