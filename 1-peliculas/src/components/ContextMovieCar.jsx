import { useEffect, useState } from "react";
import { get } from "../data/httpClient"
import MovieCard from "../components/MovieCard"
import "../components/ContextMovieCard.css"

function ContextMovieCard() {
    const [movies, SetMovies] = useState([])
    useEffect(() => {
        get("/discover/movie").then((data) => {
            SetMovies(data.results);
            console.log(data);
        })
    }, [])
    return (
        <ul className="container">
    {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
    ))}
</ul>

    )
}

export default ContextMovieCard;