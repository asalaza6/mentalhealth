import {combineReducers} from 'redux';
import loginReducer from './loginR';
import userReducer from './userR';
export default combineReducers({
    login: loginReducer,
    user: userReducer
})