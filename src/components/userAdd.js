/**
 * Created by 75214 on 2017/3/8.
 */
import React from 'react';

class UserAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
            gender: ''
        };
    }

    handleValueChange(field, value, type = 'string') {
        if (type === 'number') {
            value = +value;
        }
        this.setState({
            [field]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
    }

    render() {
        const {name, age, gender} = this.state;
        return (
            <div>
                <header>
                    <h1>添加用户</h1>
                </header>
                <main>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label>用户名：</label>
                        <input type="text" value={name}
                               onChange={(e) => this.handleValueChange('name', e.target.value)}/>
                        <br/>
                        <label>年龄：</label>
                        <input type="number" value={age || ''}
                               onChange={(e) => this.handleValueChange('age', e.target.value, 'number')}/>
                        <br/>
                        <label>性别：</label>
                        <select value={gender} onChange={(e) => this.handleValueChange('gender', e.target.value)}>
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                        <br/>
                        <br/>
                        <input type="submit" value="提交"/>
                    </form>
                </main>
            </div>
        );
    }
}
export default UserAdd;

