import React, {Component} from 'react'
import Card from './Card'

class CardList extends Component {
    render() {
        return(
            <div>
                {
                    this.props.cardsInfo.map(cardInfo => 
                    <Card key={cardInfo.img} cardInfo={cardInfo} />)
                }
            </div>
        )
    }
}

export default CardList;