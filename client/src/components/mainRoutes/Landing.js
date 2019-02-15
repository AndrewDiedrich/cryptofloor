//import axios from 'axios';
import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
//import { connect } from 'react-redux';
//import data from '../api';
import Login from '../modals/Login';
import NavBar from '../navigation/NavBar';
import Table from '../table/Table';
//import HexMap from '../graphical/HexMap';
import DynamicTreemap from '../graphical/DynamicTreemap';
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
              <Route path="/" exact={true} component={Table} />
              <Route path="/" exact component={DynamicTreemap} />               
              <Route path="/user/login" exact={true} component={Login} />                 
            </Switch>  
          </div>
        </Router>
      </div>
    );
  }
}

export default Landing;