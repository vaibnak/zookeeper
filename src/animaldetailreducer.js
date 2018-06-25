import { fetch_animals } from './Actions/constant'

export default function(state=null, action){

    switch(action.type){
        case fetch_animals:
        

        return action.payload
    }
    return state
}