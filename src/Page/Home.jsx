import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookShelf from '../Component/BookShelf';
import { selectShelf } from '../utils/Functions';

const Home = ({ setAllBooks, allBooks }) => {
    const navigate = useNavigate()
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf setAllBooks={setAllBooks} books={selectShelf(allBooks, 'Currently Reading')} shelfName={'Currently Reading'} />
                    <BookShelf setAllBooks={setAllBooks} books={selectShelf(allBooks, 'Want To Read')} shelfName={'Want To Read'} />
                    <BookShelf setAllBooks={setAllBooks} books={selectShelf(allBooks, 'Read')} shelfName={'Read'} />
                </div>
            </div>
            <div className="open-search">
                <a onClick={() => navigate('/store')}>Add a book</a>
            </div>
        </div>
    )
}

export default Home
