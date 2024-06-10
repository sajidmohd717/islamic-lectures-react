import whyMe from "../assets/thumbnail/heart-softeners/whyme.jpg";
import downArrow from "../assets/down-arrow.png";

import styles from "./Series.module.css";

function Series(props) {
  /* The plan is to show like a short description of what the 
               series is about when the down arrow is clicked
  */
  const handleclick = (e) => {
    console.log("down arrow has been clicked");
  };

  return (
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
            <span>{props.episodes}</span>
          </div>
          <div className={styles["meta-title-right"]}>
            <img
              onClick={(e) => handleclick(e)}
              className={styles["down-arrow"]}
              src={downArrow}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Series.defaultProps = {
  title: "default title",
  speaker: "default speaker",
  episodes: "default episodes",
  thumbnailImage: "default image",
  link: "default link",
  viewcount: "default viewcount",
};

export default Series;
