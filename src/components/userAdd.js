/**
 * Created by 75214 on 2017/3/8.
 */
import React from 'react';
import FormItem from '../components/FormItem';
import formProvider from '../utils/formProvider';
import {Router, Route, hashHistory} from 'react-router';
import HomeLayout from '../layouts/homeLayout';

class UserAdd extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        const {form:{name, age, gender}, formValid} = this.props;
        if (!formValid) {
            alert('请填写正确');
            return;
        }

        fetch('http://localhost:3000/user', {
            method: 'post',
            body: JSON.stringify({
                name: name.value,
                age: age.value,
                gender: gender.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.id) {
                    alert('添加成功');
                    this.context.router.push('/user/list');
                } else {
                    alert('添加失败');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const {form:{name, age, gender}, onFormChange} = this.props;
        return (
            <HomeLayout title="添加用户">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormItem label="用户名" valid={name.valid} error={name.error}>
                        <input type="text" value={name.value}
                               onChange={(e) => onFormChange('name', e.target.value)}/>
                    </FormItem>
                    <FormItem label="年龄" valid={age.valid} error={age.error}>
                        <input type="number" value={age.value || ''}
                               onChange={(e) => onFormChange('age', e.target.value)}/>
                    </FormItem>
                    <FormItem label="性别" valid={gender.valid} error={gender.error}>
                        <select
                            value={gender.value}
                            onChange={(e) => onFormChange('gender', e.target.value)}
                        >
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                    </FormItem>
                    <br/>
                    <input type="submit" value="提交"/>
                </form>
            </HomeLayout>
        );
    }
}
UserAdd.contextTypes = {
    router: React.PropTypes.object.isRequired
};
UserAdd = formProvider({
    name: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return value.length > 0;
                },
                error: '请输入用户名'
            },
            {
                pattern: /^.{1,4}$/,
                error: '用户名最多4个字'
            }
        ]
    },
    age: {
        defaultValue: 0,
        rules: [
            {
                pattern: function (value) {
                    return value >= 1 && value <= 100;
                },
                error: '输入1~100的数'
            },
        ]
    },
    gender: {
        defaultValue: '',
        rules: [
            {
                pattern: function (value) {
                    return !!value;
                },
                error: '请选择性别'
            }
        ]
    }
})(UserAdd);

export default UserAdd;

