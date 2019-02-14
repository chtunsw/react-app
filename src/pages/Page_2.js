import React from 'react'
import SampleForm from '../components/SampleForm'
import FetchFlickr from '../components/FetchFlickr'
import ReduxSample from '../components/ReduxSample'
import { Link } from 'react-router-dom'
import './Page_2.css'

class Page_2 extends React.Component {
    render() {
        return(
            <div>
                <Link className='linkItem' to='/'> index page </Link>
                <SampleForm />
                <FetchFlickr />
                <ReduxSample />
            </div>
        )
    }
}

export default Page_2