import React from 'react'
import CardList from '../components/CardList'
import {cardsInfo, cityList} from '../components/mockdata'
import ClockWall from '../components/ClockWall'
import { Link } from 'react-router-dom'
import './Page_1.css'

class Page_1 extends React.Component {
    render() {
        return(
            <div>
                <Link className='linkItem' to='/'> index page </Link>
                <ClockWall cities={cityList}/>
                <CardList cardsInfo={cardsInfo} />
            </div>
        )
    }
}

export default Page_1