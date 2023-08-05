import React from "react";
import { useEffect } from "react";
import './app.css'
import SearchIcon from'./search.svg'


const API_URL = 'http://www.omdbapi.com?apikey=bf69d59a'

// bf69d59a
const App = () =>{

    const searchMovies = async(title) =>{
        const responce = await fetch(`${API_URL}&s=${title}`)
        const data = await responce.json()

        console.log(data.Search)

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
            value={'Superman'}
            onChange={() => {}}
            />

            <img 
            src={SearchIcon}
            alt="Search"
            onClick={() => {}}
            />
        </div>
        <div className="container">
        
        </div>
     </div>
     )
}

export default App;