import whyMe from "../assets/thumbnail/heart-softeners/whyme.jpg";
import downArrow from "../assets/down-arrow.png";

import styles from "./Series.module.css";

function Series(props) {
  return (
    <a href={props.link}>
      <div className={styles["series-container"]}>
        <div className="image-container">
          <img className={styles["thumbnail-img"]} src={props.thumbnail} alt="" />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["title"]}>
            <span>{props.title}</span>
          </div>
          <div className={styles["meta-title"]}>
            <div className={styles["meta-title-left"]}>
              <span>{props.speaker}</span>
              <span>{props.episodes}</span>
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
