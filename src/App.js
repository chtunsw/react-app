import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList'
import {cardsInfo, cityList} from './components/mockdata'
import FixedTimeTag from './components/FixedTimeTag'
import LiveTimeTag from './components/LiveTimeTag'
import ClockWall from './components/ClockWall'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockWall cities={cityList}/>
        <CardList cardsInfo={cardsInfo} />
        <FixedTimeTag />
        <LiveTimeTag />
      </div>
    );
  }
}

export default App;
