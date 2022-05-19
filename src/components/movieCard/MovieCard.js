import React, { useState } from "react";

import { IMG_URL } from "../../apis/movieDpApi";
import BookmarkBtn from "../bookmarkBtn/BookmarkBtn";
import styles from "./MovieCard.module.scss";
import movieIcon from "../../assets/icon-category-movie.svg";
import seriesIcon from "../../assets/icon-category-tv.svg";
import playIcon from "../../assets/icon-play.svg";

const TrendingCard = (props) => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div
      className={`${styles.card} ${
        props.class === "big" ? styles.big : styles.small
      }`}
    >
      <div className={styles.img_box}>
        <img
          className={styles.card__img}
          src={`${IMG_URL}${props.data.backdrop_path}`}
          alt=""
        />

        <div className={styles.hover_container}>
          <button className={styles.hover_btn}>
            <img className={styles.play_icon} src={playIcon} alt="play" />
            Play
          </button>
        </div>
      </div>

      <div className={styles.bookmark}>
        <BookmarkBtn
          bookmarked={bookmarked}
          setBookmarked={setBookmarked}
          data={props.data}
        />
      </div>

      <div className={styles.details}>
        <div className={styles.info}>
          <div className={styles.release_date}>
            {props.data.release_date
              ? props.data.release_date.slice(0, 4)
              : props.data.first_air_date.slice(0, 4)}
          </div>

          <div className={styles.category}>
            <img
              className={styles.category__icon}
              src={`${props.data.release_date ? movieIcon : seriesIcon}`}
              alt=""
            />
            <p className={styles.category__name}>
              {props.data.release_date ? "movie" : "tv"}
            </p>
          </div>

          <div className={styles.age_limit}>{`${
            props.data.adult ? "18+" : "PG"
          }`}</div>
        </div>

        <div className={styles.title}>
          {props.data.release_date
            ? props.data.original_title
            : props.data.name}
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
