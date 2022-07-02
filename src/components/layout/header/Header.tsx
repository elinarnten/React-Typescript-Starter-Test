import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <Link to={"/sports"}>
          <ul className={styles.linkStyle}>Sports</ul>
        </Link>
        <Link to={"/dishes"}>
          <ul className={styles.linkStyle}>Dishes</ul>
        </Link>
      </div>
    </div>
  );
};
