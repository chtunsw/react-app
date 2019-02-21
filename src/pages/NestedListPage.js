import React from 'react'
import { Route, Link } from 'react-router-dom'

import NestedDetailPage from './NestedDetailPage'

import './Link.css'

class NestedListPage extends React.Component {
    render() {
        return (
            <div>
                <Route path='/nested/:id' component={NestedDetailPage} />
                {
                    this.props.location.pathname === '/nested' && (
                        <div>
                            <Link className='link_block' to='/'> index page </Link>
                            Nested List
                        </div>
                    )
                }
            </div>
        )
    }
}

export default NestedListPage