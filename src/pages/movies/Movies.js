import React from "react";
import styles from "./Movies.module.scss";

import Heading from "../../components/heading/Heading";
import MoviesList from "../../components/moviesList/MoviesList";

const Movies = () => {
  return (
    <div>
      <Heading text="Movies" />

      <MoviesList />
    </div>
  );
};

export default Movies;
