import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from "../../axios";

function Row({title, fetchUrl}) {
    //The component takes two props, title and fetchUrl, which will be passed when the component is used.
    const [movies, setMovies] = useState([]);
    //Using the useState hook to create a state variable named movies and a function setMovies to update its value.
    
    useEffect(() => {
        //Side Effect with useEffect:
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request)
            setMovies(request.data.results);
            // console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]); //[fetchUrl is dependancy nw, render baderege kutir abro betedegagami render enidiyaderigilin
    // console.log(movies);


    return (
        <div className='row'>
            {/* class name sinawota "bem" conventionin tetekimen bihon arif nw" https://getbem.com/naming/ */}
            <h1>{title}</h1>
            <div className='row__posters'>
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className='row__poster'
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
};
    
export default Row;