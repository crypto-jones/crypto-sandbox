import React from 'react';

const CryptoCard = props => {
  console.log(props);
  const coin = props.location.state.coin;
  return (
    <div>
      <h1>
        {coin.name} ({coin.symbol})
      </h1>
      <h3>${coin.price_usd}</h3>
      <h3>{coin.price_btc} BTC</h3>
      <h3>Rank: {coin.rank}</h3>
      <h3>{coin.percent_change_24h}% change (24h)</h3>
    </div>
  );
};

export default CryptoCard;
