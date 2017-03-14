/**
 * Created by 75214 on 2017/3/13.
 */
import React from 'react';
import HomeLayout from '../layouts/homeLayout';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: []
        }
    }

    handleEdit(book) {
        this.context.router.push('/book/edit/' + book.id);
    }

    handleDel(book) {
        const confirmed = confirm('确定删除书本吗');
        if (confirmed) {
            fetch('http://localhost:3000/book/' + book.id, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        bookList: this.state.bookList.filter(item => item.id !== book.id)
                    });
                    alert('删除图书成功');
                })
                .catch(err => {
                    alert('删除失败');
                    console.log(err);
                })
        }

    }

    componentWillMount() {
        fetch('http://localhost:3000/book')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    bookList: res
                })
            })
    }

    render() {
        const {bookList}= this.state;
        return (
            <HomeLayout title="图书列表">
                <table>
                    <thead>
                    <tr>
                        <th>图书ID</th>
                        <th>书名</th>
                        <th>价格</th>
                        <th>所有者ID</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bookList.map(book => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.name}</td>
                                    <td>{book.price}</td>
                                    <td>{book.owner_id}</td>
                                    <td>
                                        <a href="javascript:void(0)" onClick={() => this.handleEdit(book)}>编辑</a>
                                        <a href="javascript:void(0)" onClick={() => this.handleDel(book)}>删除</a>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </HomeLayout>
        )
    }
}
BookList.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default BookList;