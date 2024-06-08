import whyMe from "../assets/thumbnail/heart-softeners/whyme.jpg";

import styles from './Series.module.css'

function Series() {
  return (
    <div className={styles['series-container']}>
      <div className="image-container">
        <a href="https://youtube.com/playlist?list=PLQ02IYL5pmhFYDrmxNHAlwgcHOR4h1bPa"><img src={whyMe} alt="" /></a>
      </div>
      <div className={styles['text-container']}>
        <span>Why Me | 2024 Ramadan Series</span>
        <span>Omar Suleiman</span>
        <span>32 Episodes</span>
      </div>
    </div>
  );
}

export default Series;
