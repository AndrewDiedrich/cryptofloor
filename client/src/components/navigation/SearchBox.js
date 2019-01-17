import React from 'react';


class SearchBox extends React.Component {
    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term) //this.props in class component rather then just props in funciton componente
    }
    
    render() {
        return (
            <form className="form-inline" onSubmit={this.onFormSubmit}>
                <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value})}    
                    placeholder="Search the Market" 
                    aria-label="Search" 
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

export default SearchBox;

