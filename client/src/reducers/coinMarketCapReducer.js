import { FETCH_COIN_MARKET_CAP_DATA } from '../actions/types';


export default function(state = [], action) {
    //console.log(action);
    switch (action.type) {
        case FETCH_COIN_MARKET_CAP_DATA:
            return action.payload || false;
        default:
            return state;
    }
};

