import { FETCH_LINKEDIN_PROFILE_IMG } from '../actions/types';


export default function(state = [], action) {
    //console.log(action);
    switch (action.type) {
        case FETCH_LINKEDIN_PROFILE_IMG:
            return action.payload || false;
        default:
            return state;
    }
};

