import axios from 'axios';
import {browserHistory} from 'react-router';
import { LANDING_PAGE, LOGIN } from '../constants';


export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    };
};
export const showInvalidLogin = () => {
    return {
        type: 'SHOW_INVALID_LOGIN',
        payload: true
    };  
};
export const hideInvalidLogin = () => {
    return {
        type: 'HIDE_INVALID_LOGIN',
        payload: false
    };
};

export const getLandingPage = () => {    
    return dispatch => {           
        axios.get(LANDING_PAGE)
            .then((json) => { 
                        
                 dispatch({
                    type: 'LOAD_LANDING_PAGE',
                    payload: json.data
                    });
            })
            .catch((error) => {
                dispatch( {
                    type: 'ERROR_LANDING_PAGE',
                    payload: "Some problem occurred! Please reload the page."
                });
                dispatch({
                            type: 'SHOW_INVALID_LOGIN',
                            payload: true
                });
            })
    }  ;  
};





export const getUser = (user) => {
    
    return dispatch => {
       return axios.post(LOGIN, user);
        //return axios.post('http://10.118.4.16:8764/api/cilapplication/cil/login', user);
    };
};

export const submitUser = (user) => {
    
    return dispatch => {
        axios.post('http://10.118.4.39:8762/cil/loginpage', {'username' : 'gajendra.u','password' : 'gajendra91'})        
            .then((json) => {
                
                if(json.data.id != null) {
                    
                    dispatch( {
                    type: 'GET_USER',
                    payload: json.data
                    });
                }
                else {
                        
                        dispatch( {
                         type: 'USER_PENDING',
                            payload: 'User is pending'
                        });
                    }
            })
            .catch((error) => {
                dispatch( {
                    type: 'USER_NOT_RECEIVED',
                    payload: error
                });
            });
    };
};