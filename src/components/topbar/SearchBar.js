import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search">
        
        <div className="searchInput"> 
        <h1 className="header-title"><i>BookMyShow</i></h1>
            <input type="text" placeholder="search for movies" />
        </div>
    </div>
  )
}

export default SearchBar;
