import React from 'react'
import { Link } from 'react-router-dom'

import './Link.css'

class PrivatePage extends React.Component {
    render() {
        return (
            <div>
                <Link className='link_block' to='/'> index page </Link>
                Private Page:
                Login successfully
            </div>
        )
    }
}

export default PrivatePage