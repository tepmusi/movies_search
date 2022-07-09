import {useState, useEffect} from "react";

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//movie api key: 9b46ec76
const API_URL = 'http://www.omdbapi.com?apikey=9b46ec76';


const App = () => {

const [movies, setMovies] = useState([]);
const [searchTerm, setsearchTerm] = useState('');

const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)
}
  
    useEffect(() => {
        searchMovies("hulk")
    },[]);
    return (
        <div className="app">
            <h1>ดูหนังฟรี</h1>

            <div className="search">
                <input 
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="Search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                <div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie} />
                ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}  
        </div>
    );
}

export default App;