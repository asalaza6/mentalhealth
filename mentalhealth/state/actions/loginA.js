export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
import config from '../../config';
export function login(email,password){
    return async function action(dispatch){
        try{
            console.log('trying to login');
            const body = {email:email,password:password};
            console.log(`http://${config.api.url}:${config.api.port}/auth/login`);
            const response = await fetch(`http://${config.api.url}:${config.api.port}/auth/login`,
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const parseRes = await response.json();
            //console.log(parseRes);
            console.log(parseRes.token);
            if(parseRes.token){
                //AsyncStorage.setItem("token", parseRes.token);
                //dispatch
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload:parseRes
                });
                
                //AsyncStorage.setItem("auth", "true");
                //Alert.alert("login successful");
            }else{
                //AsyncStorage.setItem("auth", "false");
                console.log('token is null');
            }
                    
        }catch(err){
            //Alert.alert(err.message);
            console.error(err.message);
        }
    }
}
export function logout(){
    return function action(dispatch){
        dispatch({
            type: LOGOUT
        });
    }
}
