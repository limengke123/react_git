/**
 * Created by 75214 on 2017/3/13.
 */
import React from 'react';
import formProvider from '../utils/formProvider';
import FormItem from './FormItem';
import AutoComplete from './AutoComplete';

class BookEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {form:{name, price, owner_id}, formValid, editTarget}= this.props;
        if (!formValid) {
            alert('请填写正确表单信息');
            return;
        }
        let editType = '添加';
        let apiUrl = 'http://localhost:3000/book';
        let method = 'post';
        if (editTarget) {
            editType = '编辑';
            apiUrl += '/' + editTarget.id;
            method = 'put';
        }
        fetch(apiUrl, {
            method,
            body: JSON.stringify({
                name: name.value,
                price: price.value,
                owner_id: owner_id.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.id) {
                    alert(editType + '书本成功');
                    this.context.router.push('/book/list');
                    return;
                } else {
                    alert(editType + '失败');
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        const {form:{name, price, owner_id}, onFormChange}=this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <FormItem label="书名:" valid={name.valid} error={name.error}>
                    <input type="text" value={name.value} onChange={e => onFormChange('name', e.target.value)}/>
                </FormItem>
                <br/>
                <FormItem label="价格：" valid={price.valid} error={price.error}>
                    <input type="number" value={price.value} onChange={e => onFormChange('price', +e.target.value)}/>
                </FormItem>
                <br/>
                <FormItem label="所有者：" valid={owner_id.valid} error={owner_id.error}>
                    <input type="number" value={owner_id.value || ''}
                           onChange={e => onFormChange('owner_id', +e.target.value)}/>
                </FormItem>
                <br/>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}
BookEditor.contextTypes={
    router:React.PropTypes.object.isRequired
};
BookEditor = formProvider({
    name: {
        defaultValue: '',
        rules: [
            {
                pattern(value){
                    return value.length > 0;
                },
                error: '请输入书名'
            }
        ]
    },
    price: {
        defaultValue: '',
        rules: [
            {
                pattern: /^\d+$/,
                error: '请输入一个整数'
            },
            {
                pattern(value){
                    return value>0;
                },
                error:'价格必须大于0'
            }
        ]
    },
    owner_id:{
        defaultValue:0,
        rules:[
            {
                pattern:/^\d+$/,
                error:'请输入合法用户ID'
            },
            {
                pattern(value){
                    return value!==0;
                },
                error:'请输入用户ID'
            }
        ]
    }
})(BookEditor);

export default BookEditor;