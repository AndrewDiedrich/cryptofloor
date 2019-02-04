import React from 'react';
import AssetCard from './AssetCard';

const AssetList = (props) => {
    //console.log(props.images)
    const assets = props.assets.map(asset => {
        //assing key to root element of jsx in map function
        const { id, name, symbol, total_supply } = asset
        const { price, market_cap, percent_change_24h } = asset.quote.USD
        return (
            <AssetCard 
                    key={id} 
                    name={name} 
                    price={price}
                    symbol={symbol} 
                    total_supply={total_supply}
                    market_cap={market_cap}
                    percent_change_24h={percent_change_24h}     
                />
        )
    });

    return (
        <div>{assets}</div>
    )
};

export  default AssetList;