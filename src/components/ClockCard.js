import React, { Component } from 'react'
import moment from 'moment-timezone'
import styled from 'styled-components'

class ClockCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: this.props.city,
        }
    }

    getLocTime() {
        switch(this.state.location) {
            case 'Beijing':
            return moment().tz("Asia/Shanghai")
            case 'Moscow':
            return moment().tz("Europe/Moscow")
            case 'Sydney':
            return moment().tz("Australia/Sydney")
            case 'New York':
            return moment().tz("America/New_York")
            default:
        }
    }

    handleClick(loc) {
        switch(loc) {
            case 'Beijing':
            this.resetTimer()
            this.setState({
                location: 'Beijing',
            })
            break;
            case 'Moscow':
            this.resetTimer()
            this.setState({
                location: 'Moscow',
            })
            break;
            case 'Sydney':
            this.resetTimer()
            this.setState({
                location: 'Sydney',
            })
            break;
            case 'New York':
            this.resetTimer()
            this.setState({
                location: 'New York',
            })
            break;
            default:
        }
    }

    resetTimer() {
        clearInterval(this.timerId)
        this.timerId = setInterval(() => {
            this.setState({time: this.getLocTime()})
        },1000);
    }

    componentDidMount() {
        this.resetTimer()
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return(
            <TimeCard>
                <LocBar>
                    {['Beijing', 'Moscow', 'Sydney', 'New York'].map((city) => 
                        <LocButton key={city} onClick={() => this.handleClick(city)}>{city}</LocButton>
                    )}
                </LocBar>
                <LocName>
                    {this.state.location}
                </LocName>
                <LocImg src={'/img/'+this.state.location+'.jpg'}/>
                <LocDate>{this.getLocTime().format('YYYY-MM-DD dddd')}</LocDate>
                <br/>
                <LocTime>{this.getLocTime().format('HH:mm:ss')}</LocTime>
            </TimeCard>
        )
    }
}

export default ClockCard;

const TimeCard = styled.div`
    display:inline-block;
    margin:10px;
    position:relative;
    width:300px;
    height:350px;
    background-color: #7b72722e;
    box-shadow: 10px 10px 10px grey;
    border-radius:10px;
`;

const LocBar = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:10%;
`;

const LocButton = styled.button`
    border:0;
    outline:none;
    display:inline-block;
    width:25%;
    height:100%;
    background-color:white;
    opacity:0.4;
    &:hover {
        opacity:0.6;
    }
`;

const LocName = styled.div`
    position:absolute;
    top:10%;
    width:auto;
    height:10%;
    margin:10px;
    font-size:20px;
    font-weight:500;
`;

const LocImg = styled.img`
    width:100%;
    height:80%;
    border-radius:10px 10px 0 0;
`;

const LocDate = styled.span`
    font-size:25px;
    font-weight:700;
    color:#080808b3;
`;

const LocTime = styled.span`
    font-size:20px;
    font-weight:700;
    color:#08080885;
`;

