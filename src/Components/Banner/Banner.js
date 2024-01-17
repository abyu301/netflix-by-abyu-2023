import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from '../../axios';
import request from '../../request';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // Side Effect with useEffect:
        async function fetchData() {
            const requestt = await axios.get(request.fetchNetflixOriginals);
            // console.log(request)
            setMovie(
                requestt?.data.results[
                    // ?-optional chaining tibalalechi- errerochin undefined adriga eniditametalinina error eyale enidayasichegiren yiredall.
                    Math.floor(Math.random() * requestt.data.results.length)]
                    );
            // console.log(request.data.results);
            return requestt;
        }
        fetchData();
    }, []); 
    // console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
        // string & number yiwosidall, return yemiyaderigewu- ye stringun length keminisetewu neber kebelete, kekutiru yebeletutin asikerachewuna benesu fanta ... asigebaligni lemalet nw, stackoverflow lay yetegegne.
    }


    return (
    <header
        className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}
        >
            <div className="banner__contents">
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie.original_name}
                    {/* title andand gize kelay betetekesut 3 yeteleyaye simochi yikemetall, kesositu anidun kagegni enidiyizew nw  */}
                </h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
            {/* esike 150 fidel kehone ye discriptionu tsihuf yawotawal ke 150 belay kehone gin "truncate" applay yaderigal */}
            </div>
            <div className='banner__fadeBottom'/>
            {/* ke bunner photowu betachi fade yemimesil tikur shedi ale */}
    </header>
    );
}

export default Banner