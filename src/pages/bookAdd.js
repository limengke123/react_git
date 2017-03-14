/**
 * Created by 75214 on 2017/3/13.
 */
import React from 'react';
import BookEditor from '../components/BookEditor';
import HomeLayout from '../layouts/homeLayout';

class BookAdd extends React.Component{
    render(){
        return(
            <HomeLayout title="添加书本">
                <BookEditor/>
            </HomeLayout>
        )
    }
}

export default BookAdd;