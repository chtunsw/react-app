import React from 'react'
import { Link } from 'react-router-dom'

import './Link.css'

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                Page_Index
                <Link className='link_block' to='/1'> page 1 </Link>
                <Link className='link_block' to='/2'> page 2 </Link>
                <Link className='link_block' to='/customers'> customers </Link>
                <Link className='link_block' to='/nested'> nested </Link>
                <Link className='link_block' to='/login'> login page </Link>
                <Link className='link_block' to='/private'> private page </Link>
            </div>
        )
    }
}

export default IndexPage