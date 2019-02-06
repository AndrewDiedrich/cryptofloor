//import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//import data from '../api';
import Login from './modals/Login';
import NavBar from './navigation/NavBar';
import Table from './table/Table';
import HexMap from './graphical/HexMap';
import DynamicTreemap from './graphical/DynamicTreemap';
import history from '../history';
//import LoginScatter from './LoginScatter';

class App extends Component {

  
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
          <NavBar onSubmit={this.onSearchSubmit} />
            <div className="row">
              <Switch>
                <div className="col-sm">
                  <Route path="/" exact={true} component={Table} />
                  <Route path="/user/login" exact component={Login} />
                </div>
              </Switch>   
              </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
