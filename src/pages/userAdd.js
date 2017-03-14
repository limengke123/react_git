/**
 * Created by 75214 on 2017/3/8.
 */
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import HomeLayout from '../layouts/homeLayout';
import UserEditor from '../components/userEditor';

class UserAdd extends React.Component {
    render() {
        return (
            <HomeLayout title="添加用户">
                <UserEditor/>
            </HomeLayout>
        )

    }
}

export default UserAdd;

