import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Ticker extends Component {
  state = { coinPrice: [] };

  filterCoins(coins) {
    return coins.filter(coin => coin.rank <= 10);
  }

  componentDidMount() {
    axios
      .get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        function update() {
          axios
            .get('https://api.coinmarketcap.com/v1/ticker/')
            .then(response =>
              this.setState({ coinPrice: this.filterCoins(response.data) })
            )
            .catch(error => console.log(error));
        }
        setInterval(update.bind(this), 3000);
      })
      .catch(error => `You got rekt, son! ${error}`);
  }

  render() {
    return (
      <div>
        {this.state.coinPrice.map(coin => {
          return (
            <span key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.name}`,
                  state: { coin: coin }
                }}
              >
                {coin.name}
              </Link>
              <span>{coin.price_usd}</span>
            </span>
          );
        })}
      </div>
    );
  }
}
