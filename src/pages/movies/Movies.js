import React from "react";
import styles from "./Movies.module.scss";

import Heading from "../../components/heading/Heading";
import MoviesList from "../../components/moviesList/MoviesList";
import { motion } from "framer-motion";

const Movies = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Heading text="Movies" />

      <MoviesList />
    </motion.div>
  );
};

export default Movies;
