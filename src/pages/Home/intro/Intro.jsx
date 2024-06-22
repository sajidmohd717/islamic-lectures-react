import Speakers from "../speaker/Speakers"
import styles from "./Intro.module.css"

function Intro() {
    return (
      <>
        <div className={styles["title-container"]}>
          <h1 className={styles["title"]}>Islamic Lecture Series Collections</h1>
          <p className={styles["title-p"]}>
            Learn and gain Islamic knowledge through the various series of
            lectures we have by your favorite speakers, all categorized in the
            best way. Find and search for what you want seamlessly
          </p>
        </div>
      </>
    );
}

export default Intro