import React from 'react';
import '../../styles/MovieDetails.css';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;

    const img_url = "../../images/${movie.episode_id}.jpg";

  return (
    <div className="container">
      <img className='background'
        src={require(`../../images/${movie.episode_id}.jpg`)}>
        </img>
          <h2>{movie.title}</h2>
          <button className="btn" onClick={() => onFavoriteToggle(movie)}>
            {favorites.some(fav => fav.episode_id === movie.episode_id) ? "Dislike" : "Like"}
          </button>
          <p><strong>Episode:</strong> {movie.episode_id}</p>
          <div className="img-container">
            <img className="moviedets-img" src={require(`../../images/${movie.episode_id}.jpg`)} alt="movie image" />
          </div>

        </div>
      
    );
  }

export default MovieDetails;