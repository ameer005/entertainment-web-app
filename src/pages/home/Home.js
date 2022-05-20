import React from "react";
import styles from "./Home.module.scss";

import Heading from "../../components/heading/Heading";
import TrendingList from "../../components/trendingList/TrendingList";
import RecommendationsList from "../../components/recommendationsList/RecommendationsList";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className={styles.home}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.trending}>
        <Heading text="Trending" />

        <TrendingList />
      </div>
      <div className={styles.recommended}>
        <Heading text="Recommended for you" />

        <RecommendationsList />
      </div>
    </motion.div>
  );
};

export default Home;
