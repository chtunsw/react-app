import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h1>{this.props.cardInfo.title}</h1>
        <img className="Card-img" alt='img missing' src={this.props.cardInfo.img}/>
        {/*<div className="Card-img" style={{backgroundImage:"url("+this.props.img+")"}}></div>*/}
        <h2>{this.props.cardInfo.subTitle}</h2>
        <p>{this.props.cardInfo.content}</p>
      </div>
    );
  }
}

export default Card;