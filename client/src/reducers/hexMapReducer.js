import { HEXMAP_DATA } from '../actions/types';

const INITIAL_STATE = {
    data: [],
    hoveredNode: null,
    radius: 10,
    offset: 0
  };

export default function(state = INITIAL_STATE , action) {
    //console.log(action);
    switch (action.type) {
        case HEXMAP_DATA:
            return action.payload || false;
        default:
            return state;
    }
};
