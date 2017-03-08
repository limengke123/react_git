'use strict';


import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import UserAddPage from './userAdd';
import Home from './home';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/user/add" component={UserAddPage}/>
    </Router>),
    document.getElementById('app')
);
