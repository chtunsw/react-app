import React from 'react'
import { Link } from 'react-router-dom'

class CustomerListPage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'> index page </Link>
                List Of All Customers
            </div>
        )
    }
}

export default CustomerListPage