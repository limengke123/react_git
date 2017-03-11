'use strict';


import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import UserAddPage from './userAdd';
import HomePage from './home';
import UserList from '../pages/UserList';

ReactDOM.render((
        <Router history={hashHistory}>
                <Route path="/" component={HomePage}/>
                <Route path="/user/add" component={UserAddPage}/>
                <Route path="/user/list" component={UserList}/>
        </Router>),
    document.getElementById('app')
);
