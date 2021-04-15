import React, { useState } from "react";
import API from "../API";

const BookSearch = ({ setBooks }) => {
  const [search, setSearch] = useState();

  const getBook = () => {
    API.search(search).then((res) => {
      console.log(res.data.items);
      setBooks(res.data.items);
    });
  };

  return (
    <div className="container book-search">
      <p className="search-title">Book Search</p>
      <form>
        {/* <div> */}
        <label htmlFor="search">Book</label>
        {/* </div> */}
        <input
          id="search"
          className="book-input"
          placeholder="Enter Book"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        {/* <div> */}
        <button
          className="search-button"
          onClick={(e) => {
            e.preventDefault();
            getBook();
          }}
        >
          Search
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default BookSearch;
