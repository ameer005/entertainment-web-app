import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import search from "../../assets/icon-search.svg";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(searchInput);
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <img className={styles.icon_search} src={search} alt="search icon" />
      <input
        className={styles.input}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Search for movies and TV series"
      />
    </form>
  );
};

export default SearchBar;
