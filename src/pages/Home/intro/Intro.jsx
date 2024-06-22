import React, { useState } from "react";
import Speakers from "../speaker/Speakers";
import styles from "./Intro.module.css";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import Nav from "../../../assets/Components/navigation/Nav";

function Intro() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles['container']}>
        <Nav />
        <div className={styles["title-container"]}>
          <p className={styles["title-p"]}>
            Learn and gain Islamic knowledge through the various series of
            lectures we have by your favorite speakers, all categorized in the
            best way. Find and search for what you want seamlessly
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
