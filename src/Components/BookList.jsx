import React from "react";
import BookCard from "./BookCard";
import "./BookList.css"; // external CSS

function BookList({ books }) {
  if (!books || books.length === 0)
    return (
      <div className="no-data">
        <h2>No Results Found 📚</h2>
        <p>Try searching with a different keyword or explore your favorites.</p>
      </div>
    );

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
