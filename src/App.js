import "./App.css";
import { useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import StoreSearch from "./Page/StoreSearch";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAll().then((books) => setAllBooks(books))
  }, [])

  const changeBookShelf = (book, shelf) => {
    book.shelf = shelf;
    update(book, shelf).then(() => {
      setAllBooks([...allBooks.filter((b) => b.id !== book.id), book]);
    });
  }

  const selectShelf = (id) => {
    const shelf = allBooks.find((book) => book.id === id)?.shelf
    if (shelf) return shelf;
    return 'none';
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home setAllBooks={setAllBooks} allBooks={allBooks} changeBookShelf={changeBookShelf} />} />
        <Route path="/search" element={<StoreSearch selectShelf={selectShelf} changeBookShelf={changeBookShelf} setAllBooks={setAllBooks} />} />
      </Routes>
    </div>
  );
}

export default App;
