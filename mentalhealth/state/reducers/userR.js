import {GET_USER} from '../actions/userAction';


const initialState = {

}

export default function(state=initialState,action){
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state ;
    }
};