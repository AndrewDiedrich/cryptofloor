import React from 'react';

const Row = props => {
   
  const roundPrice = (price) => {
    if(price < 1) {
      return price.toFixed(3);
    }
    return price.toFixed(2);
  };

  const roundDec = (dec) => {
    return dec.toFixed(2);
  }

  return (
      <>
         <tr>
            <th scope="row">{props.cmc_rank}</th>
            <td>{props.name}</td>
            <td>{roundPrice(props.price)}</td>
            <td>{roundDec(props.percent_change_24h)}</td>
            <td>{roundDec(props.percent_change_1h)}</td>
            </tr>
      </>
    )
}


export default Row;
