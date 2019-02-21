import React from 'react'
import SampleForm from '../components/SampleForm'
import FetchFlickr from '../components/FetchFlickr'
import ReduxSample from '../components/ReduxSample'
import { Link } from 'react-router-dom'

import './Link.css'

class Page2 extends React.Component {
    render() {
        return (
            <div>
                <Link className='link_block' to='/'> index page </Link>
                Page2
                <SampleForm />
                <FetchFlickr />
                <ReduxSample />
            </div>
        )
    }
}

export default Page2