import React, { useState, createContext, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (book) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === book.id) ? prev : [...prev, book]
    );
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((book) => book.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
