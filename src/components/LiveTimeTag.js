import React, { Component } from 'react';
import styled from 'styled-components';
import { publicStyle } from './publicStyle'

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
        return(
            <Container>
                <h2>It is {this.state.time.toLocaleString()}.</h2>
                <Block />
            </Container>
            )   
    }
  }

export default LiveTimeTag;

// styled-components sample
const Container = styled.div`
  margin:auto;
  background-color: blue;
  width: 250px;
  height: 250px;
`;

// imported styled style
const Block = styled(Container)`
  background-color: red;
  ${publicStyle}
`;