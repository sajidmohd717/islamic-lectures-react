import Series from "./Series.jsx";
import styles from "./SeriesContainer.module.css";

function SeriesContainer(props) {
  return (
    <>
      <div className={styles["section-heading"]}>
        <h3 className={styles["section-title"]}>{props.sectionHead}</h3>
        <button className={styles['view-all-btn']}>View all</button>
      </div>
      <div className={styles['series-container']}>
        {props.listOfDict.map((series, index) => (
          <Series
            key={index}
            thumbnail={series.thumbnailImage}
            link={series.link}
            title={series.title}
            speaker={series.speaker}
            episodes={series.episodes}
          />
        ))}
      </div>
    </>
  );
}

export default SeriesContainer;
