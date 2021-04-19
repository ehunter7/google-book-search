import React, { useState } from "react";
import API from "../API";

const BookCard = ({ id, author, image, description, title, deleteBTN, setBooks, books }) => {
  const [bookDescription, showDescription] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleClick = (event) => {
 
    if(!saved){
        const saved_book = {
          image: image,
          title: title,
          author: author,
          description: description,
          read: false,
        };
    
        setSaved(true);
        API.addNewBook(saved_book).then(() => {
          console.log("book saved!");
        })
  } else {
    alert("Book already saved!");
  }
  };

  const buttonLabel = () => {
      if(saved){
        return "SAVED";
      }else{
        return "SAVE";
      };
  };

  const handleDelete = () => {
    API.deleteBook(id).then(() => {
      console.log("Book Removed");
    });
    const new_book_array = books.map((book) => {
      if(book._id === id){
        return;
      }
      return book;
    })
    setBooks(new_book_array);

  };

  return (
    <div className="book-card">
      <div className="row info-top">
        <div className="book-image">
          <img src={image} alt="book image" className="image" />
        </div>
        <div className="book-info">
          <div className="element">
            <label>Title:</label>
            <p className="book-title info">{title}</p>

          </div>
          <div className="element">
            <p>Author:</p>
            <p className="book-author info">{author}</p>
          </div>
          <div className="element">
            <p onClick={() => showDescription(!bookDescription)}
              className="show-book-description">View description ...</p>
          </div>
        </div>
        <div className="button-div">{deleteBTN ? <button className="save-button rounded-circle" onClick={() => handleDelete()}>DELETE</button> :
          <button className="save-button rounded-circle" onClick={() => handleClick()}>{buttonLabel()}</button> }
        </div>

      </div>
      <div className="row book-desc">
        {bookDescription ? <><p>Description:</p><p className="">  {description}</p></> : null}
      </div>
    </div>

  );
};

export default BookCard;
