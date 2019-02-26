import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTerm, searchedData } from '../../actions';

class SearchBox extends Component {
   

    //takes searchTerm and dispatches filtered data list to SearchedData in store
    onInputSubmit = (event) => {
       event.preventDefault();
       this.props.searchedData(); 
    }
    
    render() {
        return (
            //use onFormSubmit
           
            <div class="ui search">
            <div class="ui icon input"> 
            <form onSubmit={this.onInputSubmit} autoComplete="off">
                <input        
                    type="search" 
                    value={this.props.search}
                    //dispatch searchTerm action upon typing 
                    onChange={e => {this.props.searchTerm(e.target.value)}} 
                    placeholder="Search..."                
                    aria-label="Search" 
                />
                </form>
                <i className="search link icon"></i>
                </div>
                <div class="results"></div>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return { search: state.search }
}
export default connect(mapStateToProp, { searchTerm, searchedData })(SearchBox);

