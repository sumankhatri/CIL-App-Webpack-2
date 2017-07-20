import axios from 'axios';
import { PROJECT_DATA, DASHBOARD, OPINION_POLL_SUB, DASHBOARD_SEC_PART } from '../constants';
import {browserHistory} from 'react-router';

export const selectProject = (project) => {     
    return dispatch => {        
        axios.post(PROJECT_DATA, project)
            .then((json) => {               
                
                 dispatch({
                    type: 'PROJECT_SELECTED',
                    payload: json.data
                    });
            });
    };
};

export const getDashboard = () => {
    return dispatch => {       
       
       axios.get(DASHBOARD, {
           headers: {
            'userlogin': localStorage.userlogin,
            'Content-Type': 'application/json'
            }
       })
       .then((json) => {
                
                if(json.data.model.response == 'VALID') {                    
                        dispatch({
                            type: 'GET_DASHBOARD',
                            payload: json.data
                        });
                        localStorage.setItem('userloginStatus', true);
                        browserHistory.push('/dashboard');
                        }
                        else {
                            //localStorage.setItem('userloginStatus', false);
                            browserHistory.push('/');
                            dispatch({
                            type: 'LOGIN_SESSION_EXPIRED',
                            payload: 'login session expired! Please login again'
                        });
                        dispatch({
                            type: 'SHOW_INVALID_LOGIN',
                            payload: true
                        });

                            
                        }
        });
    };
    /*return dispatch => {
        console.log("inside getDashboard")
        return axios.get('/src/data/dashboard.json');
    }*/
};


export const opinionPollSub = (poll) => {
    return dispatch => {           
        axios.post(OPINION_POLL_SUB, poll)
            .then((json) => {                
                 dispatch({
                    type: 'OPINION_POLL_SUBMITTED',
                    payload: json.data
                    });
            });
    };    
};
