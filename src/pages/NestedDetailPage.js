import React from 'react'
import { Link } from 'react-router-dom'

class CustomerDetailPage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'> index page </Link>
                Nested Id:
                {this.props.match.params.id}
            </div>
        )
    }
}

export default CustomerDetailPage