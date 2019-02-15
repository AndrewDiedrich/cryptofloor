import React from 'react';
import SearchBox from './SearchBox';
//import login from '../modals.login';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div className="ui secondary menu">
                <Link className="item" to="/">DiedrichCrypto</Link>
                   
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/">Products</Link>
                  
                <Link className="item" to="/">Pricing</Link>
                            
                <div class="right menu">
                    <div class="item">
                        <div class="ui icon input">                
                            <SearchBox />
                        </div>
                    </div>
                    <Link to="/user/login" className="ui item">
                        Login
                    </Link>
                </div>   
            </div>
        )
    }
}

export default Navigation;
