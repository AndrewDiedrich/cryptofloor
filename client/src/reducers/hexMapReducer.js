import { HEXMAP_DATA } from '../actions/types';


export default function(state = [], action) {
    //console.log(action);
    switch (action.type) {
        case HEXMAP_DATA:
            return action.payload || false;
        default:
            return state;
    }
};
