import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';
import "../../styles/MovieList.css"

function MovieList({ onMovieSelect, favorites, myFavorittesToggle }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        data.sort((a, b) => a.episode_id - b.episode_id); 
        setMovies(data);
        onMovieSelect(data[0])
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  // Added a rule to check if 'myFavorittesToggle' is true, if so iterate through the favorites,
  // else iterate through 'movies'.
  return (
    <div className="row">
        {isLoading ? (
            <Loading message="Loading Movies..."/>
      ) : myFavorittesToggle ?
        (favorites.map(movie => (
          <MovieItem className='movie-item' key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
        ))
          ) : (
          movies.map(movie => (
            <MovieItem className='movie-item' key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
          ))
        )}
      </div>
);
}

export default MovieList;
