/**
 * Created by 75214 on 2017/3/8.
 */
import React from 'react';
import HomeLayout from '../layouts/homeLayout';
import {Router, Route, hashHistory,Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <HomeLayout title="welcome">
                <Link to="/user/list">用户列表</Link>
                <br/>
                <Link to="/user/add">添加用户</Link>
                <br/>
                <Link to="/book/list">图书列表</Link>
                <br/>
                <Link to="/book/add">添加图书</Link>
            </HomeLayout>
        );
    }
}
export default Home;