import React, {Component} from 'react'
import Card from './Card'

class CardList extends Component {
    render() {
        return(
            <div>
                {
                    this.props.cardsInfo.map((cardInfo, index) => 
                    <Card key={index} cardInfo={cardInfo} />)
                }
            </div>
        )
    }
}

export default CardList;