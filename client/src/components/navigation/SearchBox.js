import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTerm, searchedData } from '../../actions';

class SearchBox extends Component {
   

    onFormSubmit = (event) => {
       event.preventDefault();
       this.props.searchedData(); //this.props in class component rather then just props in funciton componente
    }
    
    render() {
        return (
            <form className="form-inline" onSubmit={this.onFormSubmit}>
                <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    value={this.props.search}
                    onChange={e => {this.props.searchTerm(e.target.value)}} 
                    placeholder="Search for Asset" 
                    aria-label="Search" 
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

const mapStateToProp = (state) => {
    return { search: state.search }
}
export default connect(mapStateToProp, { searchTerm, searchedData })(SearchBox);

