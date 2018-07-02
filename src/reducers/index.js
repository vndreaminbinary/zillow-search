import { combineReducers } from 'redux';
import PropertySearchReducer from './reducer_property_search';

const rootReducer = combineReducers({
  searchProperty: PropertySearchReducer
});

export default rootReducer;
