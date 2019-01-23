import React from 'react'
import './AutoWrapper.css'
import { connect } from 'react-redux'
import { changeUserName, changeUserStatus } from '../actions' 

class ReduxSample extends React.Component {

    handleClick = (e) => {
        const clickId = e.target.id;
        clickId === 'login' && this.props.changeUserStatus({status:'logged in'});
        clickId === 'logout' && this.props.changeUserStatus({status:'logged out'});
        clickId === 'xiaohei' && this.props.changeUserName({userName:'xiaohei'});
        clickId === 'xiaobai' && this.props.changeUserName({userName:'xiaobai'});
    }

    render() {
        return(
            <div className='AutoWrapper'>
                status: {this.props.myStatus}
                <button id='login' onClick={this.handleClick}>log in</button>
                <button id='logout' onClick={this.handleClick}>log out</button>
                <br />
                name: {this.props.myUserName}
                <button id='xiaohei' onClick={this.handleClick}>xiaohei</button>
                <button id='xiaobai' onClick={this.handleClick}>xiaobai</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        myUserName: state.user.userName,
        myStatus: state.user.status
    }
}

export default connect(mapStateToProps, {changeUserName, changeUserStatus})(ReduxSample);