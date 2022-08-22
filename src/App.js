import "./App.css";
import { useEffect, useState } from "react";
import { getAll } from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import StoreSearch from "./Page/StoreSearch";

function App() {
  const [allBooks, setAllBooks] = useState([])
  useEffect(() => {
    getAll(setAllBooks)
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home setAllBooks={setAllBooks} allBooks={allBooks} />} />
        <Route path="/store" element={<StoreSearch setAllBooks={setAllBooks} />} />
      </Routes>
    </div>
  );
}

export default App;
