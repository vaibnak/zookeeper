import { fetch_animals } from './Actions/constant'

export default function(state=null, action){

    switch(action.type){
        case fetch_animals:
        return action.payload
        case 'Delete_Animal':
        if(action.payload == 200){
        let newstate = state.filter((el) => (el.id != action.id))
        return newstate;
        }
        else
        console.log("error")
    }
    return state
}