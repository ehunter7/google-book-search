const mongoose = require("mongoose");

const booksSchema = {
  image: String,
  title: String,
  author: [],
  description: String,
  read: Boolean,
};

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;
