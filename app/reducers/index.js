import { combineReducers } from 'redux';
import reducerActiveProject from './reducer-active-project';
import reducerDashboard from './reducer-dashboard';
import reducersInvalidLogin from './reducers-invalidLogin';
import reducerLanding from './reducer-landing';

const allReducers = combineReducers({    
    activeProject: reducerActiveProject,
    dashboard: reducerDashboard,    
    invalidLogin: reducersInvalidLogin,
    landingPage: reducerLanding
});

export default allReducers;