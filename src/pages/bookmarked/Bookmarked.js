import React from "react";
import styles from "./Bookmarked.module.scss";
import { useSelector } from "react-redux";

import Heading from "../../components/heading/Heading";
import MovieCard from "../../components/movieCard/MovieCard";

import { motion } from "framer-motion";

const Bookmarked = () => {
  const data = useSelector((state) => state.movies.bookmarked);

  const renderBookmarkedMovies = () => {
    const bookmarkedMovie = data.filter((movie) => movie.release_date);

    return bookmarkedMovie.map((movie) => (
      <MovieCard key={movie.id} data={movie} class="small" />
    ));
  };

  const renderBookmarkedSeries = () => {
    const bookmarkedSeries = data.filter((movie) => !movie.release_date);

    return bookmarkedSeries.map((movie) => (
      <MovieCard key={movie.id} data={movie} class="small" />
    ));
  };
  // console.log(data);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.bookmarked_movies}>
        <Heading text="Bookmarked Movies" />
        <div className={styles.list_container}>
          <div
            className={renderBookmarkedMovies().length !== 0 ? "list-grid" : ""}
          >
            {renderBookmarkedMovies().length === 0 ? (
              <div className={styles.empty_text}>
                There are no bookmarked movies...
              </div>
            ) : (
              renderBookmarkedMovies()
            )}
          </div>
        </div>
      </div>

      <div className={styles.bookmarked_series}>
        <Heading text="Bookmarked TV Series" />
        <div className={styles.list_container}>
          <div
            className={renderBookmarkedSeries().length !== 0 ? "list-grid" : ""}
          >
            {renderBookmarkedSeries().length === 0 ? (
              <div className={styles.empty_text}>
                There are no bookmarked TV Series...
              </div>
            ) : (
              renderBookmarkedSeries()
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Bookmarked;
