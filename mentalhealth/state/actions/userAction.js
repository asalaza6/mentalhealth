export const GET_USER = 'GET_USER';
import config from '../../config';

export function getUser(token){
    return async function action(dispatch){
        try{
            const response = await fetch(`http://${config.api.url}:${config.api.port}/dashboard`,{
                method: "GET",
                headers:{
                    token: token
                }
            });
            const parseRes = await response.json();
            dispatch({
                type: GET_USER,
                payload:parseRes
            });
        }catch(err){
            console.error(err.message);
        }
    }
}

export function changePassword(user,token){
    const {email,newPassword, currentPassword} = user;
    return async function action(dispatch){
        try{
            const body = {email:email,newPassword:newPassword,currentPassword:currentPassword};
            
            const response = await fetch(`http://${config.api.url}:${config.api.port}/auth/changePassword`,
            {
                method: "POST",
                headers: {"Content-Type": "application/json",
                token:token},
                body: JSON.stringify(body)
            });
            console.log(response);
            const parseRes = await response.json();
            //console.log(response.status);
            return(response.status);
                    
        }catch(err){
            //Alert.alert(err.message);
            console.error(err.message);
        }
    }
}
