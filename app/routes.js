import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LandingPage from './components/landingPage/landing-page';
import Dashboard from './components/dashboard/Dashboard';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />		
        <Route path="dashboard" component={Dashboard} />
    </Route>
);