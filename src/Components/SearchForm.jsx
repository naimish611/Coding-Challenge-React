import React, { useState } from 'react';
import { searchBooks } from '../Components/api/googleBooks';
import BookList from '../Components/BookList';

function SearchForm() {
  const [fields, setFields] = useState({ title: '', author: '', genre: '' });
  const [error, setError] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fields.title && !fields.author && !fields.genre) {
      setError('Please enter at least one field.');
      return;
    }
    setError('');
    setLoading(true);
    const results = await searchBooks(fields);
    setBooks(results);
    setLoading(false);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} aria-label="Book search form">
       <div className="book-form">
  <input
    type="text"
    name="title"
    placeholder="Title"
    value={fields.title}
    onChange={handleInput}
    aria-label="Book title"
    className="form-input"
  />
  <input
    type="text"
    name="author"
    placeholder="Author"
    value={fields.author}
    onChange={handleInput}
    aria-label="Book author"
    className="form-input"
  />
  <input
    type="text"
    name="genre"
    placeholder="Genre/Keyword"
    value={fields.genre}
    onChange={handleInput}
    aria-label="Book genre or keyword"
    className="form-input"
  />
</div>

        <button type="submit">Search</button>
        {error && <div role="alert">{error}</div>}
      </form>
      {loading && <div>Loading...</div>}
      <BookList books={books} />
    </section>
  );
}

export default SearchForm;
