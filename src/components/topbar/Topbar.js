import React from 'react';
import './Topbar.css';
import './SearchBar.js';
import SearchBar from './SearchBar.js';

function Topbar() {
  return (
<div className="first-topbar">
    <div className="fTopbar">        
        <SearchBar />               
    </div>
    <div className="topbar">
        <div className="topbar-left">
            <ul className="topbar-left-list">
                <li className="topbar-left-list-items">Movies</li>
                <li className="topbar-left-list-items">Stream</li>
                <li className="topbar-left-list-items">Events</li>
                <li className="topbar-left-list-items">Plays</li>
                <li className="topbar-left-list-items">Sports</li>
                <li className="topbar-left-list-items">Activities</li>
                <li className="topbar-left-list-items">Buzz</li>
            </ul>        
        </div>
        <div className="topbar-right">
            <ul className="topbar-right-list">
                <li className="topbar-right-list-items">ListYourShow</li>
                <li className="topbar-right-list-items">Corporates</li>
                <li className="topbar-right-list-items">Offers</li>
                <li className="topbar-right-list-items">Gift cards</li>
            </ul>
        </div>        
    </div>
</div>

   
  )
}

export default Topbar;  