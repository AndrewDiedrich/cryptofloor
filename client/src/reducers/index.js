import { combineReducers } from 'redux';
//import { reducer as reduxForm } from 'redux-form';
import scatterReducer from './scatterReducer';
import coinMarketCapReducer from './coinMarketCapReducer';

export default combineReducers({
    auth: scatterReducer,
    data: coinMarketCapReducer
})