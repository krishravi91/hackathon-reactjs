import React from 'react';
// import { movieData } from './movie-data.js';
import './Movies.css';
import {useState,useEffect} from "react";

const API ="http://localhost:9000";

function MovieList(){
    const [mov,setMov] = useState([]);

    useEffect(() => {
        fetch(`${API}/movies`)
        .then(data=>data.json())
        .then((mov) => setMov(mov));
    }, [])

    return(
        <div className="movie-list">
            {mov.map(({poster,name,_id}) => ( 
                <Movies key={_id} poster={poster} name={name}/>
            ))}
        </div>
    )
}
function Movies({poster,name}) {
    
  return (
    <div className="movie-container">
        <img src={poster} 
         alt="Latest Movie" 
         className="movie-pic" 
        />
        <p className="movie-name">{name}</p>
    </div>
  ) 
}

export default MovieList;
