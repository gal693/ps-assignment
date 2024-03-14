import React from 'react';
import '../../styles/MovieItem.css';

// Added a container and a div for the gradient background in order to see the white text clearly 
// over the movies posters.
function MovieItem({ movie, onMovieSelect }) {
  return (
    <div className='movie-container' key={movie.episode_id}>
        <div onClick={() => onMovieSelect(movie)} className="gradient"/>
        <img src={require(`../../images/${movie.episode_id}.jpg`)} alt="movie image" className='movie-image' />
        <button onClick={() => onMovieSelect(movie)} className='movie-btn'>
          {movie.title}
        </button>
    </div>
  );
}

export default MovieItem;