const BookSearch = () => {
  return (
    <div className="container book-search">
      <p className="search-title">Book Search</p>
      <form>
        {/* <div> */}
        <label htmlFor="book">Book</label>
        {/* </div> */}
        <input id="book" className="book-input" placeholder="Enter Book" />

        {/* <div> */}
        <button className="search-button">Search</button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default BookSearch;
