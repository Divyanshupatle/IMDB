import { useState, useEffect } from "react"
import axios from 'axios';
import Banner from "./Banner"
import MovieCard from "./MovieCard"
import Pagination from "./Pagination";

export default function Movies() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    

    function nextPage() {
        setPage(page + 1);
    }

    function prevPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }


    useEffect(() => {
        async function fetchMovie() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d222a350e6cb84611fe1e9ee99be919d&language=en-US&page=${page}`)
            setMovies(response.data.results);
            // console.log(response.data.results);
        }

        fetchMovie();
    }, [page])

    return (
        <div>
            <Banner />
            <div className="text-center text-2xl m-2 font-bold"><h1>Tranding Movies</h1></div>
            <div className="flex flex-wrap sp m-2 place-content-evenly">

                {
                movies && movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))
                }
            </div>
            <Pagination nextPage={nextPage} prevPage={prevPage} pageNo={page} />
        </div>
    )
}