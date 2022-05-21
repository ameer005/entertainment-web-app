import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import styles from "./TrendingList.module.scss";
import MovieCard from "../movieCard/MovieCard";
import { fetchTrendings } from "../../features/movies/movieSlice";

const TrendingList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.trendings);

  useEffect(() => {
    dispatch(fetchTrendings());
  }, [dispatch]);

  const renderTrendingList = () => {
    if (data.status !== "success") return;
    const movies = data.trendingList.results;

    return movies.map((movie) => (
      <SwiperSlide key={movie.id}>
        <MovieCard data={movie} class="big" />
      </SwiperSlide>
    ));
  };

  return (
    <div className={styles.list_container}>
      <Swiper
        spaceBetween={15}
        slidesPerView={"auto"}
        breakpoints={{
          500: {
            spaceBetween: 26,
          },
          700: {
            spaceBetween: 28,
          },
          1200: {
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {renderTrendingList()}
      </Swiper>
    </div>
  );
};

export default TrendingList;
