import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./TrendingList.module.scss";
import TrendingCard from "../trendingCard/TrendingCard";
import { fetchTrendings } from "../../features/movies/movieSlice";

const TrendingList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.trendings);

  useEffect(() => {
    dispatch(fetchTrendings());
  }, [dispatch]);

  const renderTrendingList = () => {
    if (data.status !== "success") return;
    const movies = data.trendingList.results.slice(0, 4);

    return movies.map((movie) => <TrendingCard key={movie.id} data={movie} />);
  };

  return (
    <div className={styles.list_container}>
      <div className={styles.list}>{renderTrendingList()}</div>
    </div>
  );
};

export default TrendingList;
