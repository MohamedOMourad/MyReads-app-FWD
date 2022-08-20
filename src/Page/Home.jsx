import React from 'react'
import BookShelf from '../Component/BookShelf'
import { selectShelf } from '../utils/Functions'

const Home = ({ books }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf books={selectShelf(books, 'Currently Reading')} shelfName={'Currently Reading'} />
                    <BookShelf books={selectShelf(books, 'Want To Read')} shelfName={'Want To Read'} />
                    <BookShelf books={selectShelf(books, 'Read')} shelfName={'Read'} />
                </div>
            </div>
            <div className="open-search">
                {/* <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a> */}
            </div>
        </div>
    )
}

export default Home
