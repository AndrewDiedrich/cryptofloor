import { combineReducers } from 'redux';
//import { reducer as reduxForm } from 'redux-form';
import scatterReducer from './scatterReducer';

export default combineReducers({
    auth: scatterReducer
})