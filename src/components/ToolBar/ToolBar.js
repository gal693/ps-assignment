import React from 'react';
import '../../styles/ToolBar.css'; // Import your CSS file

function ToolBar({ showAllMovies, showFavorites, clearFavorites }) {
  return (
    <div className="toolBar">
      <button className="button btn-home" onClick={() => showAllMovies()}>Home</button>
      <button className="button btn-favorites" onClick={() => showFavorites()}>My Favorites</button>
      <button className="button btn-clear" onClick={() => clearFavorites()}>Clear Favorites</button>
    </div>
  );
}

export default ToolBar;
