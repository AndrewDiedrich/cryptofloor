import { SEARCH_TERM } from '../actions/types';


export default function(state = '', action) {
    //console.log(action);
    switch (action.type) {
        case SEARCH_TERM:
            return action.payload || 'Search for Asset';
        default:
            return state;
    }
};
