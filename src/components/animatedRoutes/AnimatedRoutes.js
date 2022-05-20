import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Bookmarked from "../../pages/bookmarked/Bookmarked";
import Home from "../../pages/home/Home";
import Movies from "../../pages/movies/Movies";
import TvSeries from "../../pages/tvSeries/TvSeries";
import Search from "../../pages/search/Search";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies" exact element={<Movies />} />
        <Route path="/tvsereis" exact element={<TvSeries />} />
        <Route path="/bookmarked" exact element={<Bookmarked />} />
        <Route path="/search" exact element={<Search />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
