import axios from "axios";

export default {
  search: (searchResult) => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchResult}`;

    return axios.get(URL);
  },

  addNewBook: (data) => {

    return axios.post("/books/saveBook", data);
  },

  getSavedBooks: () => {
    return axios.get("/books/getBooks");
  },

  deleteBook: ( id ) => {
return axios.delete("/books/deleteBook", {data: {id: id}});
  },

};
