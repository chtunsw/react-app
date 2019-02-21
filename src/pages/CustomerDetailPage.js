import React from 'react'
import { Link } from 'react-router-dom'

import './Link.css'

class CustomerDetailPage extends React.Component {
    render() {
        return (
            <div>
                <Link className='link_block' to='/'> index page </Link>
                Customer:
                {this.props.match.params.id}
                {console.log(this.props.match.params, this.props.location, this.props.history)}
            </div>
        )
    }
}

export default CustomerDetailPage