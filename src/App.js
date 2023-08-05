import React from "react";
import { useState,useEffect } from "react";
import './app.css'
import SearchIcon from'./search.svg'
import MovieCard from "./MovieCard";



const API_URL = 'http://www.omdbapi.com?apikey=bf69d59a'

const movie1 = 
    {
        "Title": "Superman & Lois",
        "Year": "2021–",
        "imdbID": "tt11192306",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA2MDVhMWItNTYwYi00OTcyLWJjZmEtNTQ2NTAxMDQyYTQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
    }

// bf69d59a
const App = () =>{

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async(title) =>{
        const responce = await fetch(`${API_URL}&s=${title}`)
        const data = await responce.json()

        setMovies(data.Search)

    }   
    useEffect(() => {
        searchMovies('Superman');
    },[])

     return(
     <div className="app">
        <h1>MovieTopia</h1>
        <div className="search">
            <input
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

            <img 
            src={SearchIcon}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0 ?
           ( <div className="container">
            {movies.map((movie) => (
                <MovieCard movie = {movie}/>
            ))}
              </div> ) : (
                <div className="empty"><h2>No movies found</h2></div>
              )
        }

       
     </div>
     )
}

export default App;