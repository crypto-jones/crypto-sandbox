import React, { Component } from 'react';
import { Route } from 'react-router';
import Ticker from './components/Ticker';
import CryptoCard from './components/CryptoCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Ticker} />
        <Route path="/:coin" component={CryptoCard} />
      </div>
    );
  }
}

export default App;
