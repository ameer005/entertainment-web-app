import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import styles from "./DetailsModal.module.scss";
import { IMG_URL } from "../../apis/movieDpApi";
import movieDpiApi from "../../apis/movieDpApi";

const DetailsModal = (props) => {
  const [movieTrailer, setMovieTrailer] = useState("");
  const [tvTrailer, setTvTrailer] = useState("");

  const moviesGenres = useSelector((state) => state.movies.moviesGenres);
  const tvSeriesGenres = useSelector((state) => state.movies.tvSeriesGenres);

  // Fetching video data
  useEffect(() => {
    const fetchMovieTrailer = async () => {
      if (!props.data.release_date) return;
      const { data } = await movieDpiApi.get(`/movie/${props.data.id}/videos`);
      const trailer = data.results.filter((movie) => movie.type === "Trailer");
      setMovieTrailer(trailer[0].key);
    };

    const fetchTvTrailer = async () => {
      if (props.data.release_date) return;
      const { data } = await movieDpiApi.get(`/tv/${props.data.id}/videos`);
      const trailer = data.results.filter((movie) => movie.type === "Trailer");

      if (data.results.length === 0) return;
      setTvTrailer(trailer.length !== 0 ? trailer[0].key : data.results[0].key);
    };

    fetchMovieTrailer();
    fetchTvTrailer();
  }, []);

  const renderGenresList = () => {
    if (props.data.release_date) {
      if (moviesGenres.status !== "success") return;
      return props.data.genre_ids.map((id) => {
        for (let genreList of moviesGenres.moviesGenresList) {
          if (genreList.id === id) {
            return (
              <div key={id} className={styles.genre}>
                {genreList.name}
              </div>
            );
          }
        }
      });
    }

    if (tvSeriesGenres.status !== "success") return;
    return props.data.genre_ids.map((id) => {
      for (let genreList of tvSeriesGenres.tvSeriesGenresList) {
        if (genreList.id === id) {
          return (
            <div key={id} className={styles.genre}>
              {genreList.name}
            </div>
          );
        }
      }
    });
  };

  //  Building gneres list
  return ReactDom.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => props.setShowModal(false)}
      className={styles.backdrop}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
      >
        <div className={styles.img_box}>
          <img
            className={styles.img_pot}
            src={`${IMG_URL}${props.data.poster_path}`}
            alt=""
          />
          <img
            className={styles.img_land}
            src={`${IMG_URL}${props.data.backdrop_path}`}
            alt=""
          />
        </div>
        <div className={styles.modal_content}>
          <div className={styles.title}>
            {props.data.name || props.data.original_title}
          </div>

          <div className={styles.genres_container}>
            <div className={styles.heading}>Genres</div>
            <div className={styles.genres}>{renderGenresList()}</div>
          </div>

          <div className={styles.sypnosis}>
            <div className={styles.heading}>Sypnosis</div>
            <div className={styles.sypnosis__text}>{props.data.overview}</div>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
            href={`https://www.youtube.com/watch?v=${
              props.data.release_date ? movieTrailer : tvTrailer
            }`}
          >
            Watch Trailer
          </a>
        </div>
        <svg
          onClick={() => props.setShowModal(false)}
          className={styles.close}
          width="26"
          height="26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z"
            fill-rule="evenodd"
          />
        </svg>
      </motion.div>
    </motion.div>,
    document.getElementById("modal")
  );
};

export default DetailsModal;
