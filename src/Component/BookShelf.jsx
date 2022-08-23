import Book from "./Book";

const BookShelf = ({ allBooks, shelfName, changeBookShelf }) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {allBooks?.map(book => {
                        return (
                            <li key={book.id}>
                                <Book changeBookShelf={changeBookShelf} shelf={book.shelf} allBooks={allBooks} book={book} />
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf;