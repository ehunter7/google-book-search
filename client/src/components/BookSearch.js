import React, { useState } from "react";
import API from "../API";

const BookSearch = () => {
  const [book, setBook] = useState();

  const getBook = () => {
    API.search(book).then((res) => {
      console.log(res.data.items[0]);
    });
  };

  return (
    <div className="container book-search">
      <p className="search-title">Book Search</p>
      <form>
        {/* <div> */}
        <label htmlFor="book">Book</label>
        {/* </div> */}
        <input
          id="book"
          className="book-input"
          placeholder="Enter Book"
          onChange={(event) => {
            setBook(event.target.value);
            console.log(book);
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
