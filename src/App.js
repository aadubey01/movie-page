import React from 'react';
import  ReactDOM  from 'react-dom';
import { useState,useEffect } from 'react';



import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//b624c93a

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=b624c93a";
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    const searchMovies= async(title) =>{
        const response = await fetch(`${API}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies("Batman")

    },[]);


    return (
      <div className = "app">
        <h1>FlickFusion</h1>
        <div className= 'search'>
            <input
               placeholder = "Search for Movies"
               value={searchTerm}
               onChange = {(e) => setSearchTerm(e.target.value)}
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={()=> searchMovies(searchTerm)}
            />
        </div>

        {
          movies?.length >0
          ?(
            <div className="container">
                {movies.map((movie)  =>(
                  <MovieCard movie={movie}/>
                ))}

        </div>
          ): (
              <div className = "empty">
                <h2> No Movies Found</h2>
              </div>
          )
        }



       
      </div>
    );
}

export default App;


ReactDOM.render(<App />,document.getElementById('root'));