import React, { Component } from 'react'
import moment from 'moment-timezone'
import styled from 'styled-components'

class ClockCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: this.props.city,
            beijingTime: moment().tz("Asia/Shanghai"),
            moscowTime: moment().tz("Europe/Moscow"),
            sydneyTime: moment().tz("Australia/Sydney"),
            newyorkTime: moment().tz("America/New_York")
        }
    }

    getLocTime() {
        switch(this.state.location) {
            case 'Beijing':
            return this.state.beijingTime
            case 'Moscow':
            return this.state.moscowTime
            case 'Sydney':
            return this.state.sydneyTime
            case 'New York':
            return this.state.newyorkTime
            default:
        }
    }

    handleClick(num) {
        switch(num) {
            case 1:
            this.setState({
                location: 'Beijing',
            })
            break;
            case 2:
            this.setState({
                location: 'Moscow',
            })
            break;
            case 3:
            this.setState({
                location: 'Sydney',
            })
            break;
            case 4:
            this.setState({
                location: 'New York',
            })
            break;
            default:
        }
    }

    componentDidMount() {
        this.timerId1 = setInterval(() => {
            this.setState({beijingTime:moment().tz("Asia/Shanghai")})
        },1000);
        this.timerId2 = setInterval(() => {
            this.setState({moscowTime:moment().tz("Europe/Moscow")})
        },1000);
        this.timerId3 = setInterval(() => {
            this.setState({sydneyTime:moment().tz("Australia/Sydney")})
        },1000);
        this.timerId4 = setInterval(() => {
            this.setState({newyorkTime:moment().tz("America/New_York")})
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId1)
        clearInterval(this.timerId2)
        clearInterval(this.timerId3)
        clearInterval(this.timerId4)
    }

    render() {
        return(
            <TimeCard>
                <LocBar>
                    <LocButton onClick={() => this.handleClick(1)}>Beijing</LocButton>
                    <LocButton onClick={() => this.handleClick(2)}>Moscow</LocButton>
                    <LocButton onClick={() => this.handleClick(3)}>Sydney</LocButton>
                    <LocButton onClick={() => this.handleClick(4)}>New York</LocButton>
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
    background-color: #15131345;
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

