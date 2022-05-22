import React, { useState } from "react";
import styles from "./Search.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Heading from "../../components/heading/Heading";
import MovieCard from "../../components/movieCard/MovieCard";
import { resetSearch } from "../../features/movies/movieSlice";

import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useState(() => {
    dispatch(resetSearch());
  }, [location.pathname]);

  const data = useSelector((state) => state.movies.search);
  if (data.status === "failed") return;

  const renderMovies = () => {
    if (data.status !== "success") return;
    const movie = data.searchResults.results.filter(
      (movie) => movie.release_date && movie.media_type !== "person"
    );

    return movie.map((movie) => {
      return <MovieCard key={movie.id} data={movie} class="small" />;
    });
  };

  const renderSeries = () => {
    if (data.status !== "success") return;
    const series = data.searchResults.results.filter(
      (movie) => !movie.release_date && movie.media_type !== "person"
    );

    return series.map((series) => {
      return <MovieCard key={series.id} data={series} class="small" />;
    });
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {data.status === "success" ? (
        <>
          <div className={styles.bookmarked_movies}>
            <Heading text="Movies" />
            <div className={styles.list_container}>
              <div className="list-grid">{renderMovies()}</div>
            </div>
          </div>

          <div className={styles.bookmarked_series}>
            <Heading text="TV Series" />
            <div className={styles.list_container}>
              <div className="list-grid">{renderSeries()}</div>
            </div>
          </div>
        </>
      ) : null}
    </motion.div>
  );
};

export default Search;
