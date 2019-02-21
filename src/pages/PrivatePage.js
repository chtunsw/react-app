import React from 'react'
import { Link } from 'react-router-dom'

class PrivatePage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'> index page </Link>
                Private Page:
                Login successfully
            </div>
        )
    }
}

export default PrivatePage