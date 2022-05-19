import React from "react";
import styles from "./Home.module.scss";

import Heading from "../../components/heading/Heading";
import TrendingList from "../../components/trendingList/TrendingList";
import RecommendationsList from "../../components/recommendationsList/RecommendationsList";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.trending}>
        <Heading text="Trending" />

        <TrendingList />
      </div>
      <div className={styles.recommended}>
        <Heading text="Recommended for you" />

        <RecommendationsList />
      </div>
    </div>
  );
};

export default Home;
