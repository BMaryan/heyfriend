import React from "react";
import { mainConstant } from "../../../core/constants/constants";
import styles from "./NotFound.module.scss";
import { NavLink } from "react-router-dom";

interface NotFoundPropsType {}

const NotFound = (props: NotFoundPropsType) => {
  return (
    <div className={styles.not_found}>
      <div className={styles.title}>Sorry, this page is not available.</div>
      <div className={styles.subtitle}>This link may be invalid, or the page may have been deleted. Make sure you try to open the correct link.</div>
      <div>
        <NavLink to={mainConstant.path} className={styles.nav_link}>
          <button>Go back to News Feed.</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;