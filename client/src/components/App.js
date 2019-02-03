//import axios from 'axios';
import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
//import { connect } from 'react-redux';
//import data from '../api';

import NavBar from './navigation/NavBar';
import Table from './table/Table';
import HexMap from './graphical/HexMap';
//import LoginScatter from './LoginScatter';

class App extends Component {

  
  render() {
    return (
      <>
    

        <NavBar onSubmit={this.onSearchSubmit} />
        <div>
          <div className="row">
            <div className="col-">
            <Table />
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
