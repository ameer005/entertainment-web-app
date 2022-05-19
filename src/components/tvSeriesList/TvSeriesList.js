import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./TvSeriesList.module.css";
import MovieCard from "../movieCard/MovieCard";
import { fetchTvSeries } from "../../features/movies/movieSlice";

const TvSeriesList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.tvSeries);

  useEffect(() => {
    dispatch(fetchTvSeries());
  }, [dispatch]);

  const renderTvSeriesList = () => {
    if (data.status !== "success") return;
    const movies = data.tvSeriesList.results;

    return movies.map((movie) => (
      <MovieCard key={movie.id} data={movie} class="small" />
    ));
  };

  return (
    <div className={styles.list_container}>
      <div className="list-grid">{renderTvSeriesList()}</div>
    </div>
  );
};

export default TvSeriesList;
