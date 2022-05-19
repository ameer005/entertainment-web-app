import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./RecommendationsList.module.scss";
import MovieCard from "../movieCard/MovieCard";
import { fetchRecommendation } from "../../features/movies/movieSlice";

const RecommendationsList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.recommendations);

  useEffect(() => {
    dispatch(fetchRecommendation());
  }, [dispatch]);

  const renderRecommendationsList = () => {
    if (data.status !== "success") return;
    const movies = data.recommendationList.results;

    return movies.map((movie) => (
      <MovieCard key={movie.id} data={movie} class="small" />
    ));
  };

  return (
    <div className={styles.list_container}>
      <div className="list-grid">{renderRecommendationsList()}</div>
    </div>
  );
};

export default RecommendationsList;
