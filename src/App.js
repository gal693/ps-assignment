import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import ToolBar from './components/ToolBar/ToolBar';
// App.css import was missing, added below.
import './App.css';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [myFavorittesToggle, setMyFavoritesToggle] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // The function below did not handle the scenario of empty favorites list which led to an error.
  // I added the handling below in lines 19-21.
  const handleFavorite = (movie) => {
    if (favorites === null) {
      setFavorites([movie])
    }
    else {
      if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
        setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
      } else {
        setFavorites([...favorites, movie]);
      }
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }
  
  // If 'my favorites' is toggled, check if the favorites list is empty, if not show the favorites.
  function showFavorites() {
    if(favorites.length !== 0)
      setMyFavoritesToggle(true);
  }

  // Toggle my favorites to 'false' in order to show the complete movie list.
  function showAllMovies() {
    setMyFavoritesToggle(false);
  }

  // If 'my favorites' is selected then go back home to all movies and then clear favorites in 
  // order to not show empty movie list.
  function clearFavorites() {
    if (myFavorittesToggle)
      showAllMovies();
    setFavorites([]);
  }

  // The 'MovieDetails' component was missing a function pass for handling the 'FavoriteToggle'.
  // In addition, I added a toolbar with buttons that allow you to show your selected favorites,
  // clear your favorites, and go back home to all movies.
  return (
    <div className="App">
      <ToolBar clearFavorites={clearFavorites} showFavorites={showFavorites} showAllMovies={showAllMovies}></ToolBar>
      <MovieDetails movie={selectedMovie} onFavoriteToggle={handleFavorite} favorites={favorites} />
      <MovieList onMovieSelect={handleMovieSelect} favorites={favorites} myFavorittesToggle={myFavorittesToggle} />
    </div>
  );
}

export default App;