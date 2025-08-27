import React from 'react';
import { useFavorites } from '../Components/context/FavoritesContext';
import BookList from './BookList';

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  return (
    <section>
      <h2>Your Favorites</h2>
      <BookList books={favorites} />
    </section>
  );
};

export default FavoritesPage;
