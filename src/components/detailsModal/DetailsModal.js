import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

import styles from "./DetailsModal.module.scss";
import { IMG_URL } from "../../apis/movieDpApi";
import movieDpiApi from "../../apis/movieDpApi";

const DetailsModal = (props) => {
  const [movieTrailer, setMovieTrailer] = useState("");
  const [tvTrailer, setTvTrailer] = useState("");

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
  return ReactDom.createPortal(
    <div onClick={() => props.setShowModal(false)} className={styles.backdrop}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.img_box}>
          <img
            className={styles.img_pot}
            src={`${IMG_URL}${props.data.poster_path}`}
            alt=""
          />
        </div>
        <div className={styles.modal_content}>
          <div className={styles.title}>
            {props.data.name || props.data.original_title}
          </div>

          <div className={styles.sypnosis}>
            <div className={styles.sypnosis__heading}>Sypnosis</div>
            <div className={styles.sypnosis__text}>{props.data.overview}</div>
          </div>

          <a
            target="_blank"
            className={styles.btn}
            href={`https://www.youtube.com/watch?v=${
              props.data.release_date ? movieTrailer : tvTrailer
            }`}
          >
            Watch Trailer
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default DetailsModal;
