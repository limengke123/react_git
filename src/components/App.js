'use strict';


import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import UserAddPage from './userAdd';
import Home from './home';
import UserList from '../pages/UserList';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/user/add" component={UserAddPage}/>
        <Route path="/user/list" component={UserList}/>
    </Router>),
    document.getElementById('app')
);
