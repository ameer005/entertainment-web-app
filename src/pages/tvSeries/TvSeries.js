import React from "react";
import styles from "./TvSeries.module.scss";

import Heading from "../../components/heading/Heading";
import TvSeriesList from "../../components/tvSeriesList/TvSeriesList";

const TvSeries = () => {
  return (
    <div>
      <Heading text="TV Series" />

      <TvSeriesList />
    </div>
  );
};

export default TvSeries;
