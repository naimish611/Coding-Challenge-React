import React from "react";
import BookCard from "./BookCard";
import "./BookList.css"; // external CSS

function BookList({ books }) {
  if (!books || books.length === 0) return <p>No results found.</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
