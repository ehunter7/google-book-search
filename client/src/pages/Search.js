import BookSearch from "../components/BookSearch";
import React, { useState } from "react";
import BookCard from "../components/BookCard";

const Search = () => {
  const [books, setBooks] = useState([]);

  return (
    <div className="search-page">
      <BookSearch setBooks={setBooks} />
      <div className="container">
      {books.map((book) => {
        return (
          <BookCard
            author={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks.thumbnail}
            description={book.volumeInfo.description}
            title={book.volumeInfo.title}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Search;
