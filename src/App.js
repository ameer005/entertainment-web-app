import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Bookmarked from "./pages/bookmarked/Bookmarked";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import TvSeries from "./pages/tvSeries/TvSeries";
import SearchBar from "./components/searchBar/SearchBar";
import Search from "./pages/search/Search";

import NavBar from "./components/navBar/NavBar";

import movieDpApi from "./apis/movieDpApi";

const App = () => {
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
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movies" exact element={<Movies />} />
            <Route path="/tvsereis" exact element={<TvSeries />} />
            <Route path="/bookmarked" exact element={<Bookmarked />} />
            <Route path="/search" exact element={<Search />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
