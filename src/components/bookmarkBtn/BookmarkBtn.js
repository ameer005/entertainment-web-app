import React, { useState } from "react";
import styles from "./BookmarkBtn.module.scss";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../../assets/icon-bookmark-full.svg";

const BookmarkBtn = () => {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <button className={styles.btn_bookmark}>
      <img
        className={styles.icon_bookmark}
        src={bookmarked ? bookmarkFull : bookmarkEmpty}
        alt=""
      />
    </button>
  );
};

export default BookmarkBtn;
