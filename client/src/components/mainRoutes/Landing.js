//import axios from 'axios';
import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
//import { connect } from 'react-redux';
//import data from '../api';
import Login from '../modals/Login';
import NavBar from '../navigation/NavBar';
import Table from '../table/Table';
import AssetTeam from '../assetTeam/AssetTeam';
import Contact from '../forms/Contact';
//import HexMap from '../graphical/HexMap';

import history from '../../history';
//import LoginScatter from './LoginScatter';

class Landing extends Component {

  
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
          <NavBar />
            <Switch>         
              {/* <Route path="/" exact={true} component={Table} /> */}
              <Route path="/" exact={true} component={AssetTeam} />
              <Route path="/contact" exact component={Contact} />      
              <Route path="/user/login" exact={true} component={Login} />                 
            </Switch>  
          </div>
        </Router>
      </div>
    );
  }
}

export default Landing;