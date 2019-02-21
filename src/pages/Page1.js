import React from 'react'
import CardList from '../components/CardList'
import { cardsInfo, cityList } from '../components/mockdata'
import ClockWall from '../components/ClockWall'
import { Link } from 'react-router-dom'

class Page1 extends React.Component {
    render() {
        return (
            <div>
                <Link to='/'> index page </Link>
                Page1
                <ClockWall cities={cityList} />
                <CardList cardsInfo={cardsInfo} />
            </div>
        )
    }
}

export default Page1