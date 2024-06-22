import React, { useState } from "react";
import Speakers from "../speaker/Speakers";
import styles from "./Intro.module.css";
import Hamburger from "hamburger-react";

function Intro() {
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
            <button className={`${styles["drop-btn"]} ${styles["signup-btn"]}`}>Sign Up</button>
            <button className={`${styles["drop-btn"]} ${styles["signin-btn"]}`}>Sign In</button>
          </div>
        )}
        <p className={styles["title-p"]}>
          Learn and gain Islamic knowledge through the various series of
          lectures we have by your favorite speakers, all categorized in the
          best way. Find and search for what you want seamlessly
        </p>
      </div>
    </>
  );
}

export default Intro;
