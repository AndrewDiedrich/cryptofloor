import axios from 'axios';
import { FETCH_COIN_MARKET_CAP_DATA, 
    SEARCH_TERM,
    SEARCHED_DATA,
    HEXMAP_DATA
    } from './types';
//import { getScalePropTypesByAttribute } from 'react-vis/dist/utils/scales-utils';

// import { SCATTER_USER } from './types';
// import ScatterJS from 'scatterjs-core';
// import ScatterEOS from 'scatterjs-plugin-eosjs2';

// // Don't forget to tell ScatterJS which plugins you are using.
// ScatterJS.plugins( new ScatterEOS() );


// // export const scatterUser = () => async dispatch => {     
// //     const res = await axios.get('/api/scatter_user')
// //         dispatch({type: SCATTER_USER, payload: res.data});
        
// // };


// export const scatterUser = () => async dispatch => {
//     ScatterJS.scatter.connect("Put_Your_App_Name_Here").then(connected => {
//     // User does not have Scatter Desktop, Mobile or Classic installed.
//     if(!connected) return false;
    
//     //dispatch(setScatter(ScatterJS.scatter));
//     dispatch({type: SCATTER_USER, payload: ScatterJS.scatter});

//     window.ScatterJS = null;
  
//     });
// }

//use searched term to filter market data
export const searchedData = () => (dispatch, getState) => {
    const { data, search } = getState();
    const filterData = () => {
        if(search !== '') {
        return data.filter(searched => {
            return searched.name.toLowerCase().includes(search.toLowerCase())
        }) 
        }
    }
    dispatch({ type: SEARCHED_DATA, payload: filterData()})
}

//update searched term state
export const searchTerm = (term) => dispatch => {
    dispatch({ type: SEARCH_TERM, payload: term})
}

//get coinmarket cap data from node route
export const fetchCoinMarketCapData = () => async dispatch => {
    const res = await axios.get('/api/coinall/');

    dispatch({ type: FETCH_COIN_MARKET_CAP_DATA, payload: res.data });
}
// SEPARATE HEX MAP ACTION
// export const hexmapData = () => (dispatch, getState) => {
//     const { data } = getState();
    
//     const createHexData = () {
//         return data.map(asset => {
//             return asset.
//         })
//     }
//     dispatch({ 
//         type: HEXMAP_DATA, 
//         payload: 
//         })
//     });
// }

