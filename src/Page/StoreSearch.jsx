import React from 'react'
import { useNavigate } from 'react-router-dom';
import { search } from '../BooksAPI';
import { useState } from "react";
import Book from '../Component/Book';

const StoreSearch = ({ setAllBooks }) => {
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState([]);

    const getQuery = (query) => {
        if (query) {
            search(query)
                .then((response) => {
                    if (Array.isArray(response)) {
                        setSearchResult(response)
                    }
                    else {
                        setSearchResult([])
                    }
                })
                .catch((error) => {
                    console.log(error)
                    setSearchResult([])
                })
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    className="close-search"
                    onClick={() => navigate('/')}
                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => {
                            getQuery(event.target.value)
                        }}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResult?.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                setAllBooks={setAllBooks}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default StoreSearch;