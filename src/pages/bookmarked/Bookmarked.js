import React from "react";
import styles from "./Bookmarked.module.scss";
import { useSelector } from "react-redux";

import Heading from "../../components/heading/Heading";
import MovieCard from "../../components/movieCard/MovieCard";

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

  renderBookmarkedMovies();
  return (
    <div>
      <div className={styles.bookmarked_movies}>
        <Heading text="Bookmarked Movies" />
        <div className={styles.list_container}>
          <div className="list-grid">{renderBookmarkedMovies()}</div>
        </div>
      </div>

      <div className={styles.bookmarked_series}>
        <Heading text="Bookmarked TV Series" />
        <div className={styles.list_container}>
          <div className="list-grid">{renderBookmarkedSeries()}</div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarked;
