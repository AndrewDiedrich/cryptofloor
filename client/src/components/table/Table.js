import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import { fetchCoinMarketCapData } from '../../actions';

class Table extends Component {
    
    componentDidMount() { 
        this.props.fetchCoinMarketCapData();
        console.log('first api call',this.props.data);
    }

    renderRow = () => {
        console.log('render row state use',this.props.data)   
        return this.props.data.map(asset => { //*** */
        //assing key to root element of jsx in map function
        const { id, cmc_rank, name } = asset
        const { price, percent_change_24h, percent_change_1h } = asset.quote.USD
        return (
            <Row 
                    key={id} 
                    name={name} 
                    price={price}
                    cmc_rank={cmc_rank}
                    percent_change_1h={percent_change_1h}
                    percent_change_24h={percent_change_24h}     
                />
        )
        }); 
        
    }
    render() {
        return (
            <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">MCap-Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">1Hr Change</th>
                <th scope="col">24Hr Change</th>
                </tr>
            </thead>
            <tbody>
            {this.renderRow()}
            </tbody>
            </table>
        )
    }
}
  
const mapStateToProps = (state) => {
    return { data: state.data };
}

export default connect(mapStateToProps, { fetchCoinMarketCapData })(Table);