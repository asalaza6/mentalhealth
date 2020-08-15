import {LOGIN_SUCCESS, LOGOUT} from '../actions/loginA';

const initialState = {
    loggedIn:false,
    token:null
}

export default function(state=initialState,action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                loggedIn:true
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                loggedIn:false
            }
        default:
            return state;
    }
};