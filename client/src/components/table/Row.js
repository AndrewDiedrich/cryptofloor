import React from 'react';

const Row = props => { 
    return (
      <>
         <tr>
            <th scope="row">{props.cmc_rank}</th>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.percent_change_24h}</td>
            <td>{props.percent_change_1h}</td>
            </tr>
      </>
    )
}


export default Row;
