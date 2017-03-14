/**
 * Created by 75214 on 2017/3/11.
 */
import React from 'react';
import HomeLayout from '../layouts/homeLayout';
import UserEditor from '../components/userEditor';
import {Router, Route, hashHistory} from 'react-router';

class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentWillMount() {
       const userId = this.props.params.id;
        fetch('http://localhost:3000/user/' + userId)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    user: res
                })
            })
    }

    render() {
        const {user}=this.state;
        return (
            <HomeLayout title="编辑用户">
                {
                    user ? <UserEditor editTarget={user}/> : '加载中...'
                }
            </HomeLayout>
        )
    }
}
UserEdit.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default UserEdit;