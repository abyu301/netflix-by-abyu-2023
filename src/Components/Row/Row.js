import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    // The component takes two props, title and fetchUrl, which will be passed when the component is used.
    const [movies, setMovies] = useState([]);
    // Using the useState hook to create a state variable named movies and a function setMovies to update its value.
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // Side Effect with useEffect:
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request)
            setMovies(request.data.results);
            // console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]); // [fetchUrl is dependancy nw, render baderege kutir abro betedegagami render enidiyaderigilin
    // console.log(movies);
    const opts = {
        heighr: "390",
        width: "100%",
        playerVard: {
            autoplay: 1
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || movie?.name || movie.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };
    

    return (
        <div className='row'>
            {/* class name sinawota "bem" conventionin tetekimen bihon arif nw" https://getbem.com/naming/ */}
            <h1>{title}</h1>
            <div className='row__posters'>
                {movies.map((movie) => (
                    <img
                    onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        // class namu hulem `row__poster` yihun but `isLargeRow` sitagegni yihen chemiribet`row__posterLarge`
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            // isLargeRow kehone movie.poster_path adirigilegni/asay kalihone or/false kehone gin  movie.backdrop_path asay
                        alt={movie.name}
                    />
                ))}
            </div>
            <div  style={{ padding: "40px" }}>
                {trailerUrl && <YouTube videoID={trailerUrl} opts={opts} />}

            </div>
        </div>
    );
}

    
export default Row;