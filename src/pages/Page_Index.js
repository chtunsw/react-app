import React from 'react'
import { Link } from 'react-router-dom'
import './Page_Index.css'

class Page_Index extends React.Component {
    render() {
        return(
            <div>
                <Link className='linkItem' to='/1'> page 1 </Link>
                <Link className='linkItem' to='/2'> page 2 </Link>
            </div>
        )
    }
}

export default Page_Index