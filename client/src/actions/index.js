import axios from 'axios';
import { FETCH_COIN_MARKET_CAP_DATA } from './types';

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

export const fetchCoinMarketCapData = () => async dispatch => {
    const res = await axios.get('/api/coinall/');

    dispatch({ type: FETCH_COIN_MARKET_CAP_DATA, payload: res.data });
}

