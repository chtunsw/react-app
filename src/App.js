import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList'
import {cardsInfo, cityList} from './components/mockdata'
import ClockWall from './components/ClockWall'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockWall cities={cityList}/>
        <CardList cardsInfo={cardsInfo} />
      </div>
    );
  }
}

export default App;
