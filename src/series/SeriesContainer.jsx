import Series from "./Series.jsx";

import styles from "./SeriesContainer.module.css";

import whyMe from "../assets/thumbnail/heart-softeners/whyme.jpg";
import angels1 from "../assets/thumbnail/heart-softeners/angels1.jpg";

function SeriesDraft() {
  let whymewebsite =
    "https://youtube.com/playlist?list=PLQ02IYL5pmhFYDrmxNHAlwgcHOR4h1bPa";
  let angelswebsite =
    "https://youtube.com/playlist?list=PLQ02IYL5pmhFYDrmxNHAlwgcHOR4h1bPa";

  return (
    <>
      <div className={styles['series-container']}>
        <Series
          thumbnail={whyMe}
          link={whymewebsite}
          title={"Why Me | 2024 Ramadan Series"}
          speaker={"Omar Suleiman"}
          episodes={"32 Episodes"}
        />
        <Series
          thumbnail={angels1}
          link={angelswebsite}
          title={"Angels in Your Presence"}
          speaker={"Omar Suleiman"}
          episodes={"32 Episodes"}
        />
      </div>
    </>
  );
}

export default SeriesDraft;
