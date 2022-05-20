import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";

import SearchBar from "./components/searchBar/SearchBar";
import NavBar from "./components/navBar/NavBar";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
import { motion } from "framer-motion";
import {
  fetchMoviesGenres,
  fetchTvSeriesGenres,
} from "./features/movies/movieSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesGenres());

    dispatch(fetchTvSeriesGenres());
  }, [dispatch]);
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <header className={styles.header}>
          <NavBar />
        </header>

        <div className={styles.search}>
          <SearchBar />
        </div>

        <main className={styles.main}>
          <AnimatedRoutes />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
