//import axios from 'axios';
import React, { Component } from 'react';
//import data from '../api';

import NavBar from './navigation/NavBar';
import Table from './table/Table';
import HexMap from './graphical/HexMap';
//import LoginScatter from './LoginScatter';
import { api } from '../api';
import axios from 'axios';
class App extends Component {


async componentDidMount() {
  const res = await axios(api);
  console.log(res.data.data)

}
  // const res = await axios({
  //   method: 'GET',
  //   url: 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  //   qs: {
  //     start: 1,
  //     limit: 5000,
  //     convert: 'USD'
  //   },
  //   headers: {
  //     'X-CMC_PRO_API_KEY': '8b41b516-58a7-4a14-8714-262e232f6597'
  //   },
  //   json: true,
  //   gzip: true
  // })
  // console.log(res.data.data);
  //this.setState({ name: data.data.data[4].name, price: data.data.data[4].quote.USD.price})
  //return res
    //this.setState({ data: res.data})
  
    
/*
    onSearchSubmit = (term) => { //asynchronous request
      const response = this.state.data.map(asset => {
        if(asset.name === term) {
          this.setState({ data: response });
        }
      })
    }
    
  */
  
  render() {
    return (
      <>
    

        <NavBar onSubmit={this.onSearchSubmit} />
        <div>
          <div className="row">
            <div className="col-">
            {/* <Table /> */}
            </div>
            <div className="col-sm">
              <HexMap />
            </div>
            <div className="col-sm">
              One of three columns
            </div>
          </div>
        {/* <AssetList assets={this.state.data}  /> */}
        </div>
      </>
    );
  }
}

export default App;
