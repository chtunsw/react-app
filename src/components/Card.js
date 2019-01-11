import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h1>{this.props.title}</h1>
        <img className="Card-img" alt='img missing' src={this.props.img}/>
        {/*<div className="Card-img" style={{backgroundImage:"url("+this.props.img+")"}}></div>*/}
        <h2>{this.props.subTitle}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;