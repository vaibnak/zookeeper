import {combineReducers} from 'redux';
import storeReducer from './storeReducer';
const rootReducer = combineReducers({
    men: storeReducer 
})

export default rootReducer