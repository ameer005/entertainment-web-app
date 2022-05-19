import React from "react";
import styles from "./Search.module.scss";
import { useSelector } from "react-redux";
import Heading from "../../components/heading/Heading";
import MovieCard from "../../components/movieCard/MovieCard";

const Search = () => {
  const data = useSelector((state) => state.movies.search);
  if (data.status === "failed") return;

  console.log(data.status);

  const renderMovies = () => {
    if (data.status !== "success") return;
    const movie = data.searchResults.results.filter(
      (movie) => movie.release_date
    );

    return movie.map((movie) => (
      <MovieCard key={movie.id} data={movie} class="small" />
    ));
  };

  const renderSeries = () => {
    if (data.status !== "success") return;
    const series = data.searchResults.results.filter(
      (movie) => !movie.release_date
    );

    return series.map((movie) => (
      <MovieCard key={movie.id} data={movie} class="small" />
    ));
  };

  return (
    <div>
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
    </div>
  );
};

export default Search;
