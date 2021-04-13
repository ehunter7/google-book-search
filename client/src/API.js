import axios from "axios";

export default {
  search: (searchResult) => {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchResult}`;

    return axios.get(URL);
  },
};
