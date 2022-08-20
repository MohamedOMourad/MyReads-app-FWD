import axios from "axios";

const API = axios.create({ baseURL: 'https://reactnd-books-api.udacity.com' })

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = async (bookId) => {
  const book = await API.get(`/books/${bookId}`, { headers })
}


export const getAll = async (setBooks) => {
  const res = await API.get(`/books`, { headers });
  console.log(res.data.books)
  setBooks(res.data.books)
}

  // fetch(`${api}/books`, { headers })
  //   .then((res) => res.json())
  //   .then((data) => data.books);

// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: "PUT",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ shelf }),
//   }).then((res) => res.json());

// export const search = (query, maxResults) =>
//   fetch(`${api}/search`, {
//     method: "POST",
//     headers: {
//       ...headers,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query, maxResults }),
//   })
//     .then((res) => res.json())
//     .then((data) => data.books);
