import React from "react";
import styles from "./TrendingCard.module.scss";
import { IMG_URL } from "../../apis/movieDpApi";
import movieIcon from "../../assets/icon-category-movie.svg";
import seriesIcon from "../../assets/icon-category-tv.svg";

const TrendingCard = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        src={`${IMG_URL}${data.backdrop_path}`}
        alt=""
      />

      <div className={styles.details}>
        <div className={styles.info}>
          <div className={styles.release_date}>
            {data.release_date.slice(0, 4)}
          </div>

          <div className={styles.category}>
            <img
              className={styles.category__icon}
              src={`${data.media_type === "movie" ? movieIcon : seriesIcon}`}
              alt=""
            />
            <p className={styles.category__name}>{data.media_type}</p>
          </div>

          <div className={styles.age_limit}>{`${
            data.adult ? "18+" : "PG"
          }`}</div>
        </div>

        <div className={styles.title}>{data.original_title}</div>
      </div>
    </div>
  );
};

export default TrendingCard;
