import React from "react";

import { IMG_URL } from "../../apis/movieDpApi";
import BookmarkBtn from "../bookmarkBtn/BookmarkBtn";
import styles from "./TrendingCard.module.scss";
import movieIcon from "../../assets/icon-category-movie.svg";
import seriesIcon from "../../assets/icon-category-tv.svg";
import playIcon from "../../assets/icon-play.svg";

const TrendingCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        src={`${IMG_URL}${data.backdrop_path}`}
        alt=""
      />

      <div className={styles.bookmark}>
        <BookmarkBtn />
      </div>

      <div className={styles.details}>
        <div className={styles.info}>
          <div className={styles.release_date}>
            {data.release_date
              ? data.release_date.slice(0, 4)
              : data.release_date}
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

      <div className={styles.hover_container}>
        <button className={styles.hover_btn}>
          <img className={styles.play_icon} src={playIcon} alt="play" />
          Play
        </button>
      </div>
    </div>
  );
};

export default TrendingCard;
