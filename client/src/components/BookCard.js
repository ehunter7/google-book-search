import React, { useState } from "react";

const BookCard = ({ author, image, description, title }) => {
  const [fullLength] = useState(false);

  //   const getDescription = (length) => {
  //     return (
  //       <p className="book-desc">
  //         {description.substring(0, 50)}
  //         <button className="more-button">...</button>
  //       </p>
  //     );
  //   };
  return (
    <div className="container book-card">
      <div className="row">
        <div className="book-image col-sm-3">
          <img src={image} alt="book image" />
        </div>
        <div className="col-sm-9">
          <div>
            <p className="book-title">{title}</p>
          </div>
          <div>
            <p className="book author">{author}</p>
          </div>
          <div>
            <p className="book-desc">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
