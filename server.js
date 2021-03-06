const express = require("express");
const { toNamespacedPath } = require("path");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to mongoose
mongoose.connect(
  process.env.MONGODB_URI,
);

mongoose.connection.on("connected", () =>{
  console.log('Connected to Mongoose');
})

app.use(routes);

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
