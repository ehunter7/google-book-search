import React, {useEffect, useState} from "react";
import API from "../API";
import BookCard from "../components/BookCard";

const Saved = () => {
const [books, setBooks] = useState([]);

useEffect(() => {
  API.getSavedBooks().then((res) => {
    setBooks(res.data);
  })
}, [books])

  return (
    <div>
      {books.map(book => {
        return (
          <BookCard
          books={books}
          setBooks={setBooks}
          id={book._id}
          deleteBTN={true}
          author={book.author}
          image={book.image}
          description={book.description}
          title={book.title}
          />
        )
      })}
    </div>
  );
};

export default Saved;
