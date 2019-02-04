//import axios from 'axios';
import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
//import { connect } from 'react-redux';
//import data from '../api';

import NavBar from './navigation/NavBar';
import Table from './table/Table';
import HexMap from './graphical/HexMap';
import DynamicTreemap from './graphical/DynamicTreemap';
//import LoginScatter from './LoginScatter';

class App extends Component {

  
  render() {
    return (
      <div>
    

    <NavBar onSubmit={this.onSearchSubmit} />
        <div>
          <div className="row">
            <div className="col-4">
            <Table />
            </div>
            <div className="col-4">
              <HexMap />
            </div>
            <div className="col-4">
              <DynamicTreemap />
            </div>
          </div>
            {/* <AssetList assets={this.state.data}  /> */}
        </div>
      </div>
    );
  }
}

export default App;
