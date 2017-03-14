'use strict';


import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import UserAddPage from '../pages/userAdd';
import BookAddPage from '../pages/bookAdd';
import HomePage from '../pages/home';
import UserList from '../pages/UserList';
import BookList from '../pages/BookList';
import UserEditPage from '../pages/UserEdit';
import BookEditPage from '../pages/BookEdit';

ReactDOM.render((
        <Router history={hashHistory}>
                <Route path="/" component={HomePage}/>
                <Route path="/user/add" component={UserAddPage}/>
                <Route path="/book/add" component={BookAddPage}/>
                <Route path="/user/list" component={UserList}/>
                <Route path="/book/list" component={BookList}/>
                <Route path="/user/edit/:id" component={UserEditPage}/>
                <Route path="/book/edit/:id" component={BookEditPage}/>
        </Router>),
    document.getElementById('app')
);
