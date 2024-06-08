import styles from './Speakers.module.css'; // Importing the CSS module

import omarsuleiman from '../assets/omar_suleiman_profile.jpg';
import yasirqadhi from '../assets/yasir_qadhi_profile.jpg';

function Speakers() {
  const speakersList = [
    {
      speaker: "Omar Suleiman",
      image: omarsuleiman,
    },
    {
      speaker: "Yasir Qadhi",
      image: yasirqadhi,
    },
  ];

  return (
    <>
      <h3>Speakers Featured</h3>
      <div className={styles['speakers-div-container']}> {/* Using the CSS module class */}
        {speakersList.map((speakerObj, index) => (
          <div className={styles['speaker-div']} key={index}> {/* Updated to use the CSS module class */}
            <img
              className={styles['speaker-image']}
              src={speakerObj.image}
              alt={`Profile of ${speakerObj.speaker}`}
            />
            <span>{speakerObj.speaker}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Speakers;
