import axios from 'axios';
import {browserHistory} from 'react-router';
import { LOGIN_PAGE, FORGOT_PWD, LOGOUT, RESET_PWD } from '../constants';

export const getUser = (user) => {
    
    return dispatch => {
       
        return axios.post(LOGIN_PAGE, user);
    };
};

export const getUserDetails = (user) => {
    
    return dispatch => {        
        return axios.post(FORGOT_PWD, user);
    };
};

export const logout = () => {
    return dispatch => {
        
        return axios.get(LOGOUT, {
           headers: {
            'userlogin': localStorage.userlogin ? localStorage.userlogin : '',
            'Content-Type': 'application/json'
            }
       }
       
       )
       .then((json) => {                
                 if(json.data) {                                     
                    localStorage.removeItem('userlogin');
                    dispatch({
                    type: 'LOGGED_OUT',
                    payload: json.data
                    });
                    browserHistory.push('/');                    
                }
            });
       
    };
       
            /*.then((json) => {  alert(json)              
                console.log(json.data)
                 if(!json.data.token) {                    
                    localStorage.removeItem('userlogin');
                    browserHistory.push('/');
                    dispatch({
                    type: 'LOGGED_OUT',
                    payload: json.data
                    });
                }
            });*/
      
};


export const resetPassword = (userInfo) => {
    return dispatch => {           
        return axios.post(RESET_PWD, userInfo)
            .then((json) => {                
                 if(json.data) {                   
                    localStorage.removeItem('forgotlogin');
                    browserHistory.push('/');                    
                }
            });
    } ;   
};