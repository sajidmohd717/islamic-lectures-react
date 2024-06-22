import styles from "./Nav.module.css";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles["title-container"]}>
        <div className={styles["title-hamburger-container"]}>
          <div className={styles["logo"]}>
            <h1 className={styles["title"]}>Islamic Lecture</h1>
            <h1 className={styles["title"]}>Series Collections</h1>
          </div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        {isOpen && (
          <div className={styles["dropdown-menu"]}>
            <Link className={styles["link"]} to="/">
              <button
                className={`${styles["drop-btn"]} ${styles["signup-btn"]}`}
              >
                Home
              </button>
            </Link>
            <Link className={styles["link"]} to="/signup">
              <button
                className={`${styles["drop-btn"]} ${styles["signup-btn"]}`}
              >
                Sign Up
              </button>
            </Link>
            <Link className={styles["link"]} to="/signin">
              <button
                className={`${styles["drop-btn"]} ${styles["signin-btn"]}`}
              >
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
