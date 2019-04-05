import { combineReducers } from 'redux';
//import { reducer as reduxForm } from 'redux-form';
import scatterReducer from './scatterReducer';
import coinMarketCapReducer from './coinMarketCapReducer';
import linkedinReducer from './linkedinReducer';
import searchReducer from './searchReducer';
import searchedDataReducer from './searchedDataReducer';
import hexMapReducer from './hexMapReducer';

export default combineReducers({
    auth: scatterReducer,
    data: coinMarketCapReducer,
    linkedin: linkedinReducer,
    search: searchReducer,
    searchedData: searchedDataReducer,
    hexmapData: hexMapReducer,

})