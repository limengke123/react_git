/**
 * Created by 75214 on 2017/3/14.
 */
import React from 'react';
import BookEditor from '../components/BookEditor';
import HomeLayout from '../layouts/homeLayout';

class BookEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: null
        }
    }

    componentWillMount() {
        const bookId = this.props.params.id;
        fetch('http://localhost:3000/book/' + bookId)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    book: res
                })
            })
    }

    render() {
        const book = this.state;
        return (
            <HomeLayout title="书本编辑">
                {
                    book ? <BookEditor editTarget={book}/> : '加载中.....'
                }
            </HomeLayout>
        )
    }
}

export default BookEdit;