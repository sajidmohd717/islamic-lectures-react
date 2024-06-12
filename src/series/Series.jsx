import React, { useState } from "react";

import whyMe from "../assets/thumbnail/heart-softeners/whyme.jpg";
import downArrow from "../assets/down-arrow.png";
import upArrow from "../assets/up-arrow.png";

import styles from "./Series.module.css";

function Series(props) {
  /* The plan is to show like a short description of what the 
               series is about when the down arrow is clicked
  */
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  console.log("down arrow has been clicked");

  return (
    <>
      <div className={styles["series-with-description"]}>
        <div className={styles["series-container"]}>
          <div className="image-container">
            <a href={props.link} target="_blank">
              <img
                className={styles["thumbnail-img"]}
                src={props.thumbnail}
                alt=""
              />
            </a>
          </div>
          <div className={styles["text-container"]}>
            <div className={styles["title"]}>
              <span>{props.title}</span>
            </div>
            <div className={styles["meta-title"]}>
              <div className={styles["meta-title-left"]}>
                <span>{props.speaker}</span>
                <span>{props.viewcount}</span>
                <span>{props.episodes}</span>
              </div>
              <div className={styles["meta-title-right"]}>
                <img
                  onClick={toggleVisibility}
                  className={styles["down-arrow"]}
                  src={isVisible ? downArrow : upArrow}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["description-container"]}>
          {isVisible && (
            <div className="items">
              {" "}
              <hr />
              Description:
              <p>
                Why were these difficult moments ordained for you? Why do some
                tests seem to keep going on forever—are they tests or
                punishments? Why is this the life you have to live? What is your
                purpose? Why you?{" "}
              </p>
              <p>Why not you? </p>
              <p>
                In this life-changing Ramadan series, join Dr. Omar Suleiman to
                transform your perspective on life, qadar, and what has been
                decreed for you. Know this: the world isn’t against
                you—everything has only been perfectly set up for you.{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Series.defaultProps = {
  title: "default title",
  speaker: "default speaker",
  episodes: "default episodes",
  thumbnailImage: "default image",
  link: "default link",
  viewcount: "default views",
};

export default Series;
