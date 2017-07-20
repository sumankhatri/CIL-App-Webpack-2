import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, useRouterHistory, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const appHistory = useRouterHistory(createMemoryHistory)({});


import routes from'./routes';
const store = createStore(
    allReducers,
    applyMiddleware(promise(), thunk, createLogger())

);

render(<Provider store={store}>
	        <Router history = {browserHistory} routes={routes} />
       </Provider>
       , document.getElementById('app'));
