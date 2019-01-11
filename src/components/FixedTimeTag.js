import React from 'react';

const sampleStyle = {
    margin:'10px auto 10px auto',
    width:'200px',
    background:'yellow',
    color:'blue'
}

class FixedTimeTag extends React.Component {
    constructor() {
        super();
        this.state = { time: new Date()}
    }

    componentDidMount() {
        alert("Did Mount");
    }
    
    render() {
        return (
            <div style={sampleStyle}>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    };
}

export default FixedTimeTag;