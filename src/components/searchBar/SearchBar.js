import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.scss";
import search from "../../assets/icon-search.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../../features/movies/movieSlice";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchInput) dispatch(fetchSearchResults(searchInput));
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchInput]);

  useEffect(() => {
    setSearchInput("");
  }, [navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <img className={styles.icon_search} src={search} alt="search icon" />
      <input
        onClick={() => navigate("/search")}
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
