import styles from "./Nav.module.css";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles["title-container"]}>
        <div className={styles["title-hamburger-container"]}>
          <div className={styles["logo"]}>
            <Link to={"/"}>
              <h1 className={styles["title"]}>
                Islamic Lecture <br /> Series Collections
              </h1>
            </Link>
          </div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        {isOpen && (
          <div className={styles["dropdown-menu"]}>
            {/* <Link className={styles["link"]} to="/" onClick={handleLinkClick}>
              <button
                className={`${styles["drop-btn"]} ${styles["signup-btn"]}`}
              >
                Home
              </button>
            </Link> */}
            <Link
              className={styles["link"]}
              to="/signup"
              onClick={handleLinkClick}
            >
              <button
                className={`${styles["drop-btn"]} ${styles["signup-btn"]}`}
              >
                Sign Up
              </button>
            </Link>
            <Link
              className={styles["link"]}
              to="/signin"
              onClick={handleLinkClick}
            >
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
