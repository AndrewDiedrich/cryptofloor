import { combineReducers } from 'redux';
//import { reducer as reduxForm } from 'redux-form';
import scatterReducer from './scatterReducer';
import coinMarketCapReducer from './coinMarketCapReducer';
import searchReducer from './searchReducer';
import searchedDataReducer from './searchedDataReducer';

export default combineReducers({
    auth: scatterReducer,
    data: coinMarketCapReducer,
    search: searchReducer,
    searchedData: searchedDataReducer
})