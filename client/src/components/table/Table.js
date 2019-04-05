import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import { fetchCoinMarketCapData, searchedData } from '../../actions';

class Table extends Component {
    
    componentDidMount() { 
        //this.loading()
        this.props.fetchCoinMarketCapData();
    
        //console.log('first api call',this.props.data);
     
    }

    // async loading = () => {
    //     if(this.props.data.length === 0) {
    //         console.log('render spinner!')
    //         this.loadingDataSpinner()
    //     }
    //     this.renderRow()
    // }
    // loadingDataSpinner = () => {
    //     return (   
    //         <tr>
    //         <th scope="row"></th>
    //         <td></td>
    //         <td></td>
    //         <td></td>
    //         <td><div className="spinner-border text-success" role="status">
    //                 <span className="sr-only">Loading...</span>
    //             </div>  </td>
    //         </tr>
                       
    //     )
    // }
    

    renderRow = () => {
        //console.log('render row state use', this.props.data.length === 0)   
        return this.props.data.map(asset => { //*** */
        //assing key to root element of jsx in map function
        const { id, cmc_rank, name } = asset
        const { price, percent_change_24h, percent_change_1h } = asset.quote.USD
        //this.props.searchedData();
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
            <>
            <table className="table">
            <thead className="">
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
        </>   
        )
    }
}
  
const mapStateToProps = (state) => {
    return { 
        data: state.data, 
        searchedData: state.searchedData,
        search: state.search, 
    };
}

export default connect(mapStateToProps, { fetchCoinMarketCapData, searchedData })(Table);