import React from 'react'
import { Route, Link } from 'react-router-dom'

import NestedDetailPage from './NestedDetailPage'

class NestedListPage extends React.Component {
    render() {
        return (
            <div>
                <Route path='/nested/:id' component={NestedDetailPage} />
                {
                    this.props.location.pathname === '/nested' && (
                        <div>
                            <Link to='/'> index page </Link>
                            Nested List
                        </div>
                    )
                }
            </div>
        )
    }
}

export default NestedListPage