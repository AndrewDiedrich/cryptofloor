import axios from 'axios';
import { keys } from '../config/dev';

export const api = {
    method: 'GET',
    url: `${keys.proxy}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
    qs: {
      start: 1,
      limit: 5000,
      convert: 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': `${keys.coinapi}`
    },
    json: true,
    gzip: true
    };


// const res = await axios({
//     method: 'GET',
//     url: 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//     qs: {
//       start: 1,
//       limit: 5000,
//       convert: 'USD'
//     },
//     headers: {
//       'X-CMC_PRO_API_KEY': '8b41b516-58a7-4a14-8714-262e232f6597'
//     },
//     json: true,
//     gzip: true
//   })
//   console.log(res.data.data);
//   this.setState({ data: res.data.data[4].name, symbol: res.data.data[4].quote.USD.price})
//   //return res
//     //this.setState({ data: res.data})
     
//     }