import React from 'react'
import { Link } from 'react-router-dom'

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                Page_Index
                <Link to='/1'> page 1 </Link>
                <Link to='/2'> page 2 </Link>
                <Link to='/customers'> customers </Link>
                <Link to='/nested'> nested </Link>
                <Link to='/login'> login page </Link>
                <Link to='/private'> private page </Link>
            </div>
        )
    }
}

export default IndexPage