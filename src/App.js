import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList'
import {cardsInfo, cityList} from './components/mockdata'
import ClockWall from './components/ClockWall'
import SampleForm from './components/SampleForm'
import FetchFlickr from './components/FetchFlickr'
import ReduxSample from './components/ReduxSample'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClockWall cities={cityList}/>
        <CardList cardsInfo={cardsInfo} />
        <SampleForm />
        <FetchFlickr />
        <ReduxSample />
      </div>
    );
  }
}

export default App;
