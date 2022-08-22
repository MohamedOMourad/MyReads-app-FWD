import Book from "./Book";


const BookShelf = ({ setAllBooks, books, shelfName }) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books ? books?.map(book => {
                        return (
                            <li key={book.id}>
                                <Book setAllBooks={setAllBooks} book={book} />
                            </li>
                        )
                    }) : <p>loading...</p>}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf;