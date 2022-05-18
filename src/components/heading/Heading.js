import React from "react";
import styles from "./Heading.module.scss";

const Heading = (props) => {
  return <div className={styles.heading}>{props.text}</div>;
};

export default Heading;
