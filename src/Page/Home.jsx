import React from 'react'
import BookShelf from '../Component/BookShelf'

const Home = () => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf shelfName={'Currently Reading'} />
                    <BookShelf shelfName={'Want To Read'} />
                    <BookShelf shelfName={'Read'} />
                </div>
            </div>
            <div className="open-search">
                {/* <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a> */}
            </div>
        </div>
    )
}

export default Home
