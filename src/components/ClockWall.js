import React, { Component } from 'react'
import ClockCard from './ClockCard'
import styled from 'styled-components'

class ClockWall extends Component {
    render() {
        return(
            <Wall>
                {
                    this.props.cities.map((city) => <ClockCard city={city}/>)
                }
            </Wall>
        )
    }
}

export default ClockWall;

const Wall = styled.div`
    width:100%;
    height:auto;
`;