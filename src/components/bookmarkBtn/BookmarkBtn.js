import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, deleteBookmark } from "../../features/movies/movieSlice";

import styles from "./BookmarkBtn.module.scss";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../../assets/icon-bookmark-full.svg";

const BookmarkBtn = (props) => {
  const dispatch = useDispatch();
  const bookmarkList = useSelector((state) => state.movies.bookmarked);

  useEffect(() => {
    bookmarkList.forEach((item) => {
      if (item.id == props.data.id) props.setBookmarked(true);
    });
  }, []);

  const bookmarkedState = () => {
    if (props.bookmarked) {
      props.setBookmarked(false);
      dispatch(deleteBookmark(props.data));
    } else {
      props.setBookmarked(true);
      dispatch(addBookmark(props.data));
    }
  };

  return (
    <button onClick={bookmarkedState} className={styles.btn_bookmark}>
      <img
        className={styles.icon_bookmark}
        src={props.bookmarked ? bookmarkFull : bookmarkEmpty}
        alt=""
      />
    </button>
  );
};

export default BookmarkBtn;
