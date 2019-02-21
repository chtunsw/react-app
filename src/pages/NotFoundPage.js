import React from 'react'
import { Link } from 'react-router-dom'

import './Link.css'

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <Link className='link_block' to='/'> index page </Link>
                NotFoundPage
                404: Page Not Found
            </div>
        )
    }
}

export default NotFoundPage