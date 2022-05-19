import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MoviesList.module.css";
import MovieCard from "../movieCard/MovieCard";
import { fetchMovies } from "../../features/movies/movieSlice";

const MoviesList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const renderMoviesList = () => {
    if (data.status !== "success") return;
    const movies = data.moviesList.results;

    return movies.map((movie) => (
      <MovieCard key={movie.id} data={movie} class="small" />
    ));
  };

  return (
    <div className={styles.list_container}>
      <div className="list-grid">{renderMoviesList()}</div>
    </div>
  );
};

export default MoviesList;
