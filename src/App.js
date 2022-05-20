import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";

import SearchBar from "./components/searchBar/SearchBar";
import NavBar from "./components/navBar/NavBar";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
import { motion } from "framer-motion";

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
          <AnimatedRoutes />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
