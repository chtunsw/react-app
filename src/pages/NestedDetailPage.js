import React from 'react'
import { Link } from 'react-router-dom'

import './Link.css'

class CustomerDetailPage extends React.Component {
    render() {
        return (
            <div>
                <Link className='link_block' to='/'> index page </Link>
                Nested Id:
                {this.props.match.params.id}
            </div>
        )
    }
}

export default CustomerDetailPage