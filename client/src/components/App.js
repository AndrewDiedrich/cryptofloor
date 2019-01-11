import axios from 'axios';
import React, { Component } from 'react';
import { getData } from '../actions';
import LoginScatter from './LoginScatter';

class App extends Component {
  state = {
    data: 'crypto',
    symbol: ''
    
  }

async componentDidMount() { 
  const res = await axios({
    method: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      start: 1,
      limit: 5000,
      convert: 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': '8b41b516-58a7-4a14-8714-262e232f6597'
    },
    json: true,
    gzip: true
  })
  console.log(res.data.data);
  this.setState({ data: res.data.data[4].name, symbol: res.data.data[4].quote.USD.price})
  //return res
    //this.setState({ data: res.data})
     
    }
    
  
  
  render() {
    return (
      <div>
        App 
        <h1>{this.state.data}</h1>
        <h1>{this.state.symbol}</h1>
        <h1>Scatter</h1>
        <LoginScatter />
      </div>
    );
  }
}

export default App;
