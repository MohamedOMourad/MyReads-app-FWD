import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookShelf from '../Component/BookShelf';
import { selectShelf } from '../utils/Functions';

const Home = ({ allBooks, changeBookShelf }) => {
    const navigate = useNavigate();

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf changeBookShelf={changeBookShelf} allBooks={selectShelf(allBooks, 'Currently Reading')} shelfName={'Currently Reading'} />
                    <BookShelf changeBookShelf={changeBookShelf} allBooks={selectShelf(allBooks, 'Want To Read')} shelfName={'Want To Read'} />
                    <BookShelf changeBookShelf={changeBookShelf} allBooks={selectShelf(allBooks, 'Read')} shelfName={'Read'} />
                </div>
            </div>
            <div className="open-search">
                <a onClick={() => navigate('/search')}>Add a book</a>
            </div>
        </div>
    )
}

export default Home
