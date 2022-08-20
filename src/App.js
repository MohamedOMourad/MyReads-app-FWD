import "./App.css";
import { useEffect, useState } from "react";
import { getAll } from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";

function App() {
  const [books, setBooks] = useState();
  useEffect(() => {
    getAll(setBooks)
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
