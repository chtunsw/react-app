import React from 'react'
import { Link } from 'react-router-dom'

import './Link.css'

class CustomerListPage extends React.Component {
    render() {
        return (
            <div>
                <Link className='link_block' to='/'> index page </Link>
                List Of All Customers
            </div>
        )
    }
}

export default CustomerListPage