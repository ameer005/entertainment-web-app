import React from "react";
import styles from "./TvSeries.module.scss";

import Heading from "../../components/heading/Heading";
import TvSeriesList from "../../components/tvSeriesList/TvSeriesList";

import { motion } from "framer-motion";

const TvSeries = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Heading text="TV Series" />

      <TvSeriesList />
    </motion.div>
  );
};

export default TvSeries;
