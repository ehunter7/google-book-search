const mongoose = require("mongoose");

const booksSchema = {
  title: String,
  content: String,
};

const Book = mongoose.model("Book", booksSchema);

module.exports = Book;
