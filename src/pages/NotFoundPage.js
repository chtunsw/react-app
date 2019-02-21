import React from 'react'
import { Link } from 'react-router-dom'

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'> index page </Link>
                NotFoundPage
                404: Page Not Found
            </div>
        )
    }
}

export default NotFoundPage