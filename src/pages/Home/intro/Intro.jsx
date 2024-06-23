import React, { useState } from "react";
import Speakers from "../speaker/Speakers";
import styles from "./Intro.module.css";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import Nav from "../../../Components/navigation/Nav";

function Intro() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles["title-container"]}>
        <p className={styles["title-p"]}>
        Discover and deepen your Islamic knowledge with curated lecture series from renowned scholars. Easily find and explore content by topic, speaker, and more, all in one place.
        </p>
      </div>
    </>
  );
}

export default Intro;
