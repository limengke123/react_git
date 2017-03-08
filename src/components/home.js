/**
 * Created by 75214 on 2017/3/8.
 */
import React from 'react';
import {Router, Route, hashHistory,Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>welcome</h1>
                </header>
                <main>
                    <Link to="/user/add">添加用户</Link>
                </main>
            </div>
        );
    }
}
export default Home;