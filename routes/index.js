const router = require("express").Router();
const bookRoutes = require("./booksRoute");

router.use("/books", bookRoutes);

module.exports = router;
