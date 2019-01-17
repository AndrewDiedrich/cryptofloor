import React from 'react';

const AssetCard = props => { 
    return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <p>{props.symbol}</p>
      
      </div>
    )
}


export default AssetCard;

// <span>{props.total_supply}</span>
// <span>{props.market_cap}</span>
// <span>{props.percent_change_24h}</span>     