import React from 'react'
import { Link } from 'react-router-dom'

class Login_Page extends React.Component {
    redirect = async () => {
        try {
            // Authenticates server
            // assume we get the responce successfully: a jwt file 
            const jwt_responce = 'something';
            localStorage.setItem('jwt', jwt_responce)
            this.props.history.push('/private')
        }
        catch (err) {
            // handle err
        }
    }

    clear_localStorage = () => {
        localStorage.clear()
    }

    render() {
        return (
            <div>
                <Link to='/'> index page </Link>
                Login_Page
                <button onClick={this.redirect}> login </button>
                <button onClick={this.clear_localStorage}> clear storage </button>
            </div>
        )
    }
}

export default Login_Page