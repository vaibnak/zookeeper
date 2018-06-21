import {combineReducers} from 'redux';
import storeReducer from './storeReducer';
import selectedanimalreducer from './selectedanimalreducer';
import selectedanimaldetailreducer from './animaldetailreducer';
const rootReducer = combineReducers({
    men: storeReducer, 
    super: selectedanimalreducer,
    animallist: selectedanimaldetailreducer
})

export default rootReducer