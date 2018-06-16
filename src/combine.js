import {combineReducers} from 'redux';
import storeReducer from './storeReducer';
import selectedanimalreducer from './selectedanimalreducer';
const rootReducer = combineReducers({
    men: storeReducer, 
    super: selectedanimalreducer
})

export default rootReducer