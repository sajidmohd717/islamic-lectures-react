import whyMe from "../assets/thumbnail/heart-softeners/whyme.jpg";
import downArrow from "../assets/down-arrow.png";

import styles from "./Series.module.css";

function Series() {
  return (
    <a href="https://youtube.com/playlist?list=PLQ02IYL5pmhFYDrmxNHAlwgcHOR4h1bPa">
      <div className={styles["series-container"]}>
        <div className="image-container">
          <img className={styles["thumbnail-img"]} src={whyMe} alt="" />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["title"]}>
            <span>Why Me | 2024 Ramadan Series</span>
          </div>
          <div className={styles["meta-title"]}>
            <div className={styles["meta-title-left"]}>
              <span>Omar Suleiman</span>
              <span>32 Episodes</span>
            </div>
            <div className={styles["meta-title-right"]}>
              <img className={styles["down-arrow"]} src={downArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Series;
