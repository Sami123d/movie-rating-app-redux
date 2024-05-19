import React from "react";
import "./movielisting.scss";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movie/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
function MovieListing() {
  const movies = useSelector(getAllMovies);

  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
       return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  )
}

export default MovieListing;
